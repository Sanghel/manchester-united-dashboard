# Design System Builder Skill

## 📋 Descripción

Construye un design system completo desde especificaciones de diseño con design tokens, componentes base y documentación.

## 🎯 Cuándo Usar

- Al inicio del proyecto
- Para crear componentes base
- Implementar design tokens

## 🎨 Design Tokens

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... hasta 900
        },
        // Extraídos desde Figma/diseño
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        // ...
      },
      spacing: {
        // Sistema de 8px
      },
      borderRadius: {
        // Radios consistentes
      },
    },
  },
}
```

## 📦 Componentes Base

### Inputs

- TextInput
- SearchInput
- SelectInput
- DatePicker
- Toggle

### Buttons

- Button
- IconButton
- ButtonGroup

### Cards

- Card (base)
- CardHeader
- CardBody
- CardFooter

### Feedback

- Spinner
- Skeleton
- Toast
- Badge
- Chip

### Layout

- Container
- Grid
- Flex
- Stack

## 📚 Documentación

Cada componente debe tener:

- Storybook story con todas las variantes
- JSDoc completo
- Ejemplos de uso
- Guía de accesibilidad

## 🔗 Skills Relacionadas

- `design-reader-mcp` - Extrae tokens desde diseño
- `component-builder` - Construye cada componente
- `tailwind-composer` - Genera clases Tailwind
