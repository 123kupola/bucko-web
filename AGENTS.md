# Agent Guidelines for bucko-web

## Build Commands
- `npm run dev` - Start development server on localhost:4321
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Testing
No test framework configured. Add testing setup if needed.

## Code Style Guidelines

### TypeScript
- Use TypeScript interfaces for component props
- Export interfaces at top of component files
- Use optional properties with `?` for non-required props

### Imports
- Use relative imports with `../` pattern
- Group imports by type (components, layouts, etc.)
- Import Astro components without file extension

### Naming Conventions
- Components: PascalCase (DogInfo, PhotoGallery)
- Props: camelCase
- Variables: camelCase
- CSS classes: kebab-case in markup, camelCase in styles

### Formatting
- Use 4-space indentation in markup
- Single quotes for strings in JavaScript/TypeScript
- Destructuring props at component start
- Default values in destructuring: `prop = default`

### Error Handling
- No specific error handling patterns established
- Use try/catch for async operations when added

### CSS
- Scoped styles within components
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Use CSS Grid and Flexbox for layouts

## Reference Documentation
- [REFACTORING_HANDBOOK.md](./REFACTORING_HANDBOOK.md) - Detailed guide on Gallery and Blog implementation fixes.