# Tailwind Composer Skill

## 📋 Descripción

Genera clases Tailwind consistentes desde especificaciones de diseño.

## 🎯 Cuándo Usar

- Al implementar componentes desde diseños
- Para mantener consistencia visual
- Generar variantes

## 🎨 Patrones de Composición

### CVA (Class Variance Authority)

```typescript
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  // Base classes - siempre aplicadas
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
```

### cn() Helper

```typescript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Uso
<button className={cn(
  buttonVariants({ variant, size }),
  fullWidth && 'w-full',
  className
)} />
```

## 📐 Sistema de Espaciado

```typescript
// Usar sistema de 4px/8px
padding: {
  '0': '0',
  '1': '0.25rem',  // 4px
  '2': '0.5rem',   // 8px
  '3': '0.75rem',  // 12px
  '4': '1rem',     // 16px
  // ...
}
```

## 🎯 Mejores Prácticas

1. **Usar variables CSS para colores dinámicos**

```typescript
className = 'bg-[rgb(var(--color-primary))]'
```

2. **Grupos de hover/focus/active**

```typescript
className = 'group-hover:bg-gray-100 group-focus:ring-2'
```

3. **Responsive con mobile-first**

```typescript
className = 'text-sm md:text-base lg:text-lg'
```

## 🔗 Skills Relacionadas

- `component-builder` - Usa Tailwind Composer
- `design-reader-mcp` - Extrae specs de diseño
