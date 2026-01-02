# Developer Guide: Gallery & Navigation Fixes

This document serves as a reference for future agents working on the `bucko-web` project, specifically focusing on the fixes applied to the Photo Gallery and Blog navigation systems during the January 2026 refactoring.

## 1. Photo Gallery & Lightbox Reliability

### The Problem
During a partial refactoring, the `PhotoGallery.astro` component was left with broken JavaScript logic and missing UI elements. The most critical issue was that the `closeLightbox` function actually re-opened/kept the lightbox visible due to a logical inversion.

### Before (Broken Logic)
```javascript
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.removeAttribute("hidden"); // WRONG: This makes it visible
        document.body.style.overflow = "hidden"; // WRONG: This keeps scroll locked
    }
}
```

### After (Corrected Logic)
```javascript
function closeLightbox() {
    if (lightbox) {
        lightbox.setAttribute("hidden", ""); // CORRECT: Uses hidden attribute
        document.body.style.overflow = ""; // CORRECT: Restores scrolling
    }
}
```

### Key Principles for Gallery:
1.  **Cache Elements**: Select DOM elements once at the top of the script (within `define:vars`) instead of searching for them in every function call.
2.  **State Management**: Use the `hidden` attribute or a consistent CSS class (like `.hidden`) for visibility, not a mix of both.
3.  **UI Feedback**: Always include a counter (`Index / Total`) and captions to provide context to the user in the lightbox.

---

## 2. Blog Navigation & Dynamic Routes

### The Problem
The blog cards were using anchor links (`#blog-id`) which led nowhere because there were no corresponding ID targets or dedicated blog pages.

### Before (Broken Link)
```astro
<h3 class="post-title">
    <a href={`#blog-${post.id}`}>{post.title}</a>
</h3>
```

### After (Proper Linking)
```astro
<h3 class="post-title">
    <a href={`/blog/${post.id}`}>{post.title}</a>
</h3>
```

### The Solution: Dynamic Routing
To make this work, we implemented Astro's dynamic routing:
1.  **Created `src/pages/blog/[id].astro`**: This file uses `getStaticPaths()` to generate a unique page for every post in `src/data/blog.ts`.
2.  **BlogPost Component**: Created a dedicated `BlogPost.astro` component to handle the full-page layout of an article, separate from the preview card.

---

## 3. Global Navigation (The "Subpage" Trap)

### The Problem
Navigation links like `#about` work on the homepage but fail when clicked from a subpage (e.g., `/blog/my-post`) because the browser looks for the ID `#about` on the *current* page.

### The Fix
Always use absolute paths for anchor links in global components like `Header.astro` and `Footer.astro`.

### Code Snippet
```javascript
// WRONG (Relative)
const navLinks = [ { href: "#about", label: "About" } ];

// RIGHT (Absolute)
const navLinks = [ { href: "/#about", label: "About" } ];
```

### Rationale
By prefixing with `/`, we ensure the browser first navigates to the root (homepage) and then jumps to the section ID, regardless of where the user currently is.

---

## 4. Build System & Vite Noise
If you see warnings about `matchHostname` or `@astrojs/internal-helpers/remote`, ignore them or suppress them in `astro.config.mjs` using the `vite.build.rollupOptions.onwarn` hook. These are internal Astro issues related to remote image optimization that trigger when no remote domains are configured.
