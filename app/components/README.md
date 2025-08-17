# Component CSS Structure

Following the @style-guide.mdc, each component should have its own CSS module file:

## File Naming Convention
- Component: `ComponentName.tsx`
- Styles: `ComponentName.module.css`

## Example Structure
```
app/
  components/
    Header/
      Header.tsx
      Header.module.css
    ProjectCard/
      ProjectCard.tsx
      ProjectCard.module.css
    Button/
      Button.tsx
      Button.module.css
```

## CSS Module Usage
```tsx
import styles from './ComponentName.module.css';

export default function ComponentName() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Title</h2>
    </div>
  );
}
```

## Design System Integration
- Use CSS custom properties from globals.css
- Follow spacing scale (--space-1 through --space-12)
- Use typography classes (.h1, .h2, .h3, .display, .caption)
- Implement consistent hover states and transitions
- Maintain accessibility standards (focus states, contrast)

## Best Practices
- Use semantic class names
- Leverage design tokens from globals.css
- Keep component styles scoped and isolated
- Follow mobile-first responsive design
- Ensure WCAG AA compliance
