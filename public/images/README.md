
# Bučko's Photo Gallery 📷🐕

Welcome to Bučko's photo collection! This directory is where you'll store all of Bučko's amazing photos.

## 📤 How to Upload Photos

1. **Add your photos** directly to this `images/` folder
2. **Use descriptive filenames** like:
   - `bucko-main-portrait.jpg`
   - `bucko-playing-park.jpg`
   - `bucko-cuddling-couch.jpg`
   - `bucko-birthday-2024.jpg`

## 🖼️ Supported Formats

- ✅ **JPG/JPEG** - Best for photos
- ✅ **PNG** - Best for images with transparency
- ✅ **WebP** - Modern, compressed format
- ✅ **AVIF** - Next-generation image format

## ⚡ Automatic Optimization

Your photos will be **automatically optimized** when you build the site:

- **File Size**: Large MB files → Optimized to 300-800KB
- **Dimensions**: Auto-resized to optimal web sizes (max 1200px width)
- **Compression**: 80% quality (perfect balance of quality/size)
- **Format**: Converted to modern WebP/AVIF for faster loading
- **Responsive**: Different sizes generated for mobile/desktop/tablet

## 📋 Example Usage

After uploading your photos, reference them in your code:

```javascript
const photos = [
  {
    src: '/images/bucko-main.jpg',
    alt: 'Bučko portrait photo',
    caption: 'My handsome boy Bučko!'
  },
  {
    src: '/images/bucko-playing.jpg',
    alt: 'Bučko playing fetch',
    caption: 'Bučko loves playing fetch in the park'
  }
];
```

## 💡 Tips for Great Results

### Photo Guidelines:
- **Resolution**: Higher resolution photos will look better when optimized
- **Aspect Ratio**: Square (1:1) or landscape (4:3, 3:2) work best
- **Lighting**: Well-lit photos will optimize better
- **Content**: Clear, focused shots of Bučko look amazing!

### File Organization:
- Use consistent naming: `bucko-[activity]-[location].jpg`
- Group similar photos: `bucko-birthday-1.jpg`, `bucko-birthday-2.jpg`
- Avoid spaces: Use hyphens or underscores instead

## 🚀 Next Steps

1. Upload your favorite photos of Bučko
2. Update the photos array in `src/pages/index.astro`
3. Run `npm run dev` to see your photos in the gallery
4. Enjoy the automatic optimization and beautiful presentation!

## 🎉 Features

Your uploaded photos will automatically get:
- **Lightbox viewing** - Click any photo to view in full-screen
- **Keyboard navigation** - Use arrow keys in lightbox
- **Touch/swipe support** - Swipe on mobile devices
- **Lazy loading** - Photos load as needed for better performance
- **Responsive design** - Perfect on all screen sizes
- **SEO optimization** - Proper alt text and descriptions

---

**Made with ❤️ for Bučko** 🐕
