# Comprehensive Refactoring Plan for bucko-web

## Overview
This plan outlines a systematic refactoring of the bucko-web project to improve code organization, implement Astro's image optimization, and add blog functionality while maintaining all existing features.

---

## Prerequisites
- [x] Git repository initialized
- [x] Astro image optimization research completed
- [ ] Create backup branch before major changes

---

## Phase 1: Setup & Foundation

### 1.1 Git Safety
```bash
# Create backup branch
git checkout -b backup/before-refactoring

# Create main development branch
git checkout -b feature/refactoring
```

### 1.2 Project Structure Update
Create the following directory structure:
```
bucko-web/
├── src/
│   ├── assets/              # NEW: For optimized images
│   │   └── images/         # Move frequently used images here
│   ├── data/                # NEW: Data files
│   │   ├── dog.ts          # Dog information
│   │   ├── photos.ts       # Photo gallery data
│   │   └── blog.ts         # Blog posts data
│   ├── components/
│   │   ├── layout/         # NEW: Layout components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── Container.astro
│   │   ├── sections/       # NEW: Page sections
│   │   │   ├── Hero.astro
│   │   │   ├── FunFacts.astro
│   │   │   ├── MemoryLane.astro
│   │   │   ├── CollectionStats.astro
│   │   │   └── Blog.astro
│   │   ├── blog/           # NEW: Blog components
│   │   │   ├── BlogPostCard.astro
│   │   │   └── BlogPost.astro
│   │   ├── DogInfo.astro   # UPDATE: Use <Image>
│   │   ├── PhotoGallery.astro  # NEW: Unified gallery with <Image>
│   │   └── (DELETE) PhotoGallerySimple.astro  # OLD
│   │   └── (DELETE) PhotoGalleryFixed.astro   # OLD
│   ├── layouts/
│   │   └── Layout.astro   # UPDATE: Add Header/Footer
│   ├── pages/
│   │   ├── index.astro    # UPDATE: Use new components
│   │   └── blog.astro     # NEW: Blog listing page
│   └── styles/            # NEW: Global styles
│       ├── global.css
│       └── variables.css
└── public/
    └── images/            # Keep remaining images here
```

### 1.3 Image Optimization Setup
Add to `astro.config.mjs`:
```javascript
import { defineConfig } from "astro/config";
import sharp from "sharp";

export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Configure sharp options if needed
      },
    },
    // Remote image domains (if needed in future)
    domains: [],
  },
});
```

---

## Phase 2: Data Layer Creation

### 2.1 Create Dog Data File
**File**: `src/data/dog.ts`
```typescript
export interface DogInfo {
    name: string;
    nickname: string;
    breed: string;
    age: string;
    photoUrl: string;
    personality: string[];
    favoriteThings: string[];
}

export const dogInfo: DogInfo = {
    name: "Bučko",
    nickname: "Buks",
    breed: "American Bully",
    age: "11 months old",
    photoUrl: "/images/bucko-buks-004.jpg",
    personality: [
        "Playful",
        "Loving",
        "Energetic",
        "Friendly",
        "Curious",
        "Intelligent",
    ],
    favoriteThings: [
        "Long walks in the park",
        "Playing fetch",
        "Cuddling on the couch",
        "Meeting new people",
        "Sunbathing",
        "Treats and snacks",
        "Swimming",
        "Dog park adventures",
    ],
};
```

### 2.2 Create Photos Data File
**File**: `src/data/photos.ts`
```typescript
export interface Photo {
    src: string;
    alt: string;
    caption: string;
}

export const featuredPhotos: Photo[] = [
    {
        src: "/images/bucko-buks-004.jpg",
        alt: "Bučko portrait photo",
        caption: "My handsome boy Bučko looking absolutely adorable!",
    },
    // ... all 9 featured photos
];

export const allPhotos: Photo[] = [
    // ... all 86 photos
];
```

### 2.3 Create Blog Data File
**File**: `src/data/blog.ts`
```typescript
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author?: string;
    tags?: string[];
    featuredImage?: string;
}

export const blogPosts: BlogPost[] = [
    // Add blog posts here manually
];
```

---

## Phase 3: Image Optimization Migration

### 3.1 Strategy for Image Migration
1. **Hero/Main Photo**: Move to `src/assets/images/` and import directly
2. **Gallery Photos**: Keep in `public/images/` but add width/height
3. **Profile Photo**: Move to `src/assets/images/` for DogInfo component

### 3.2 Image Component Helper
**File**: `src/components/ResponsiveImage.astro`
```astro
---
import { Image } from 'astro:assets';

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    class?: string;
}

const { src, alt, width, height, priority = false, class: className } = Astro.props;
---

<Image 
    src={src} 
    alt={alt} 
    width={width} 
    height={height} 
    priority={priority}
    class={className}
    loading={priority ? "eager" : "lazy"}
    decoding={priority ? "sync" : "async"}
/>
```

### 3.3 Migrate DogInfo Component
Update to use `<Image>` from `astro:assets`:
```astro
---
import { Image } from 'astro:assets';
// Import main photo if moved to assets, otherwise use public folder
// import mainPhoto from '../assets/images/bucko-buks-004.jpg';

// If in public folder, need dimensions
const photoWidth = 300;
const photoHeight = 300;
---

<div class="dog-photo">
    <Image 
        src={photoUrl} 
        alt={`Photo of ${name}`}
        width={photoWidth}
        height={photoHeight}
    />
</div>
```

### 3.4 Create Unified PhotoGallery Component
**File**: `src/components/PhotoGallery.astro`

**Key Features**:
- Use `<Image>` component for all photos
- Add width/height for images (can use standard values: 800x600 or similar)
- Maintain lightbox functionality
- Support both featured and full photo sets
- Responsive grid layout

**Implementation Notes**:
- Use data-attributes for event handling (no inline onclick)
- Load photos lazily except first few
- Implement keyboard navigation
- Touch-friendly for mobile

---

## Phase 4: Component Extraction

### 4.1 Extract Layout Components

**Header.astro**:
- Sticky navigation
- Links to Home, About, Gallery, Blog
- Responsive mobile menu
- Site logo/branding

**Footer.astro**:
- Contact information (email, Facebook, Twitter)
- Quick links
- Copyright
- Social media icons

### 4.2 Extract Page Sections

**Hero.astro**:
- Welcome message
- Photo count
- Animated elements
- Section ID: #hero

**FunFacts.astro**:
- Grid of fact cards
- Icons and descriptions
- Hover effects

**MemoryLane.astro**:
- Journey narrative
- Personal story

**CollectionStats.astro**:
- Statistics cards
- Photo collection info

### 4.3 Create Blog Components

**BlogSection.astro**:
- Blog listing
- Limit display option
- "Read more" link

**BlogPostCard.astro**:
- Featured image
- Title, date, excerpt
- Tags
- Link to full post

**BlogPost.astro**:
- Full blog post layout
- Navigation between posts
- Share buttons (optional)

---

## Phase 5: Page Updates

### 5.1 Update index.astro
**Before**: 600+ lines with everything inline

**After**:
```astro
---
import Layout from '../layouts/Layout.astro';
import { dogInfo, featuredPhotos } from '../data/dog';
import { photos } from '../data/photos';
import Hero from '../components/sections/Hero.astro';
import FunFacts from '../components/sections/FunFacts.astro';
import MemoryLane from '../components/sections/MemoryLane.astro';
import CollectionStats from '../components/sections/CollectionStats.astro';
import DogInfo from '../components/DogInfo.astro';
import PhotoGallery from '../components/PhotoGallery.astro';
import BlogSection from '../components/sections/Blog.astro';

const pageTitle = `Meet ${dogInfo.name} - ${dogInfo.nickname}'s Beautiful Photo Collection`;
const pageDescription = `Discover ${dogInfo.name}...`;
---

<Layout title={pageTitle}>
    <Hero dogInfo={dogInfo} photoCount={featuredPhotos.length} />
    
    <section id="about" class="section">
        <DogInfo {...dogInfo} />
    </section>
    
    <section id="gallery" class="section">
        <PhotoGallery 
            photos={featuredPhotos} 
            title={`${dogInfo.name}'s Photo Gallery`} 
        />
    </section>
    
    <FunFacts dogName={dogInfo.name} />
    <MemoryLane dogInfo={dogInfo} />
    <CollectionStats featuredCount={featuredPhotos.length} totalCount={86} />
    
    <section id="blog" class="section">
        <BlogSection limit={3} />
    </section>
</Layout>
```

### 5.2 Create blog.astro
```astro
---
import Layout from '../layouts/Layout.astro';
import BlogSection from '../components/sections/Blog.astro';

<Layout title="Bucko's Blog - Stories & Adventures">
    <header class="blog-header">
        <h1>📝 Bucko's Blog</h1>
        <p>Stories, adventures, and memorable moments</p>
    </header>
    
    <BlogSection showAll={true} />
</Layout>
```

---

## Phase 6: Styling System

### 6.1 Create Global CSS Variables
**File**: `src/styles/variables.css`
```css
:root {
    /* Colors */
    --color-primary: #8B4513;
    --color-secondary: #2c3e50;
    --color-accent: #f39c12;
    --color-success: #3498db;
    --color-bg: #f6f6f6;
    
    /* Gradients */
    --gradient-warm: linear-gradient(45deg, #f39c12, #e67e22);
    --gradient-cool: linear-gradient(45deg, #3498db, #2980b9);
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    
    /* Typography */
    --font-body: system-ui, -apple-system, sans-serif;
    --font-size-base: 1rem;
    
    /* Border radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    
    /* Shadows */
    --shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 25px rgba(0, 0, 0, 0.2);
}
```

### 6.2 Create Global CSS
**File**: `src/styles/global.css`
```css
@import './variables.css';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-secondary);
    line-height: 1.6;
}
```

---

## Phase 7: Clean Up & Optimization

### 7.1 Remove Duplicate Code
- Delete `PhotoGallerySimple.astro`
- Delete `PhotoGalleryFixed.astro`
- Remove inline styles from `index.astro`
- Consolidate duplicate CSS

### 7.2 Update Layout.astro
- Import Header and Footer
- Add `<main>` wrapper
- Import global styles
- Add proper meta tags

### 7.3 Accessibility Improvements
- Add aria-labels to buttons
- Ensure all images have alt text
- Add keyboard navigation support
- Focus states for interactive elements
- Skip to main content link

### 7.4 Performance Optimizations
- Use `priority` prop for above-the-fold images
- Lazy load all gallery images
- Preload critical CSS
- Minimize JavaScript

---

## Phase 8: Testing

### 8.1 Functionality Testing
- [ ] Photo gallery lightbox works
- [ ] Keyboard navigation in lightbox
- [ ] Mobile touch support
- [ ] Navigation links scroll correctly
- [ ] Blog section displays properly

### 8.2 Image Optimization Testing
- [ ] Images are optimized to WebP/AVIF
- [ ] No layout shift (CLS)
- [ ] Images load lazily
- [ ] Hero image loads eagerly

### 8.3 Responsive Testing
- [ ] Mobile (< 480px)
- [ ] Tablet (480px - 768px)
- [ ] Desktop (> 768px)
- [ ] Large screens (> 1200px)

### 8.4 Cross-browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Phase 9: Documentation & Deployment

### 9.1 Update Documentation
- Update `README.md` with new structure
- Document component usage
- Add image optimization guide
- Update `AGENTS.md` if needed

### 9.2 Git Management
```bash
# Commit changes
git add .
git commit -m "feat: complete refactoring with Astro image optimization"

# Create PR branch
git push origin feature/refactoring
```

---

## Implementation Order

### Week 1: Foundation
1. Day 1-2: Git setup & directory structure
2. Day 3-4: Data layer creation
3. Day 5: Image optimization setup & helper

### Week 2: Components
1. Day 1-2: Unified PhotoGallery component
2. Day 3: Layout components (Header, Footer)
3. Day 4: Page sections extraction
4. Day 5: Blog components

### Week 3: Integration & Styling
1. Day 1-2: Update index.astro & create blog.astro
2. Day 3: Global CSS system
3. Day 4: Component styling
4. Day 5: Cleanup & optimization

### Week 4: Testing & Deployment
1. Day 1-2: Testing & bug fixes
2. Day 3: Performance optimization
3. Day 4: Documentation updates
4. Day 5: Final deployment

---

## Risk Mitigation

### Risk 1: Breaking Photo Gallery
**Mitigation**: 
- Create comprehensive test cases before refactoring
- Keep original gallery as fallback
- Test lightbox functionality thoroughly

### Risk 2: Image Optimization Issues
**Mitigation**:
- Start with a few test images
- Verify output format and quality
- Have fallback to `<img>` tags if needed

### Risk 3: Data Structure Changes
**Mitigation**:
- Use TypeScript interfaces
- Compile-time type checking
- Gradual migration

---

## Success Criteria

✅ All TypeScript errors resolved
✅ Photo gallery functionality preserved
✅ All images optimized with `<Image>` component
✅ Code significantly cleaner and more maintainable
✅ Blog section implemented
✅ Responsive design working on all devices
✅ Performance improved (Lighthouse score > 90)
✅ Accessibility improvements (WCAG AA compliant)
✅ Documentation updated

---

## Future Enhancements

After this refactoring:
- Add Content Collections for blog posts
- Implement search functionality
- Add image filtering by category
- Create individual blog post pages
- Add contact form
- Implement analytics
- Add PWA support