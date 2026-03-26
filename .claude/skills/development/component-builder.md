# Component Builder Skill

## 📋 Descripción

Construye componentes React completos siguiendo los estándares del proyecto: TypeScript + Tailwind + CVA + Tests + Storybook + JSDoc.

## 🎯 Cuándo Usar Esta Skill

- Crear cualquier componente del design system
- Componentes de features (ScoreCard, StandingsTable, etc.)
- Necesitas garantizar calidad y consistencia
- Componentes reutilizables de UI

## 📁 Estructura de Archivos

```
src/components/ui/buttons/Button/
├── Button.tsx           # Componente principal
├── Button.test.tsx      # Tests unitarios
├── Button.stories.tsx   # Storybook stories
└── index.ts             # Barrel export
```

## 🏗️ Template de Componente

````typescript
// Button.tsx
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Variantes del componente usando CVA
 */
const buttonVariants = cva(
  // Estilos base
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
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
);

/**
 * Props del componente
 */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Muestra un spinner y deshabilita el botón */
  loading?: boolean;
  /** Ocupa todo el ancho disponible */
  fullWidth?: boolean;
}

/**
 * Botón principal de la aplicación
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Spinner size="sm" className="mr-2" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
````

## 🧪 Template de Tests

```typescript
// Button.test.tsx
import { render, screen } from '@/tests/utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  // ═══════════════════════════════════════════════════════════
  // RENDERING
  // ═══════════════════════════════════════════════════════════
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders all variants correctly', () => {
      const variants = ['primary', 'secondary'] as const;
      variants.forEach((variant) => {
        const { unmount } = render(<Button variant={variant}>{variant}</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        unmount();
      });
    });
  });

  // ═══════════════════════════════════════════════════════════
  // INTERACTIONS
  // ═══════════════════════════════════════════════════════════
  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<Button onClick={handleClick} disabled>Click me</Button>);
      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // ═══════════════════════════════════════════════════════════
  // ACCESSIBILITY
  // ═══════════════════════════════════════════════════════════
  describe('Accessibility', () => {
    it('is focusable via keyboard', async () => {
      const user = userEvent.setup();
      render(<Button>Click me</Button>);
      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();
    });
  });
});
```

## 📖 Template de Storybook

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};
```

## ✅ Checklist de Implementación

### Código

- [ ] TypeScript sin errores (`tsc --noEmit`)
- [ ] ESLint sin warnings (`npm run lint`)
- [ ] Prettier formateado (`npm run format`)
- [ ] Props tipadas con `interface`
- [ ] JSDoc en todas las props públicas
- [ ] Soporte para `className` adicional
- [ ] `forwardRef` si el componente acepta ref
- [ ] `displayName` definido

### Variantes (CVA)

- [ ] Variantes definidas con CVA
- [ ] `defaultVariants` especificadas
- [ ] Estilos base en string inicial
- [ ] Uso de `cn()` para merge de clases

### Accesibilidad

- [ ] ARIA labels donde apliquen
- [ ] Roles semánticos (`button`, `dialog`, etc.)
- [ ] Focus visible (outline)
- [ ] Navegación por teclado funcional
- [ ] Estados disabled correctos

### Testing

- [ ] Tests de rendering (todas las variantes)
- [ ] Tests de interacciones (click, hover, etc.)
- [ ] Tests de accesibilidad (keyboard navigation)
- [ ] Tests de estados (loading, disabled, error)
- [ ] Coverage >80%

### Storybook

- [ ] Story con todas las variantes
- [ ] Controles interactivos (`argTypes`)
- [ ] Documentación con `docs` addon
- [ ] Tag `autodocs` habilitado
- [ ] Ejemplos de uso (`AllVariants`, `AllSizes`, etc.)

## 🔧 Comandos

```bash
# Crear estructura de archivos
mkdir -p src/components/ui/buttons/Button
touch src/components/ui/buttons/Button/{Button.tsx,Button.test.tsx,Button.stories.tsx,index.ts}

# Ejecutar tests
npm run test -- Button.test.tsx

# Ver coverage
npm run test:coverage -- Button.test.tsx

# Ejecutar Storybook
npm run storybook

# Build del componente
npm run build
```

## 📊 Métricas de Calidad

| Métrica           | Target                     |
| ----------------- | -------------------------- |
| Test Coverage     | >80%                       |
| TypeScript Errors | 0                          |
| ESLint Warnings   | 0                          |
| Storybook Stories | ≥3 (variantes principales) |
| ARIA Compliance   | 100%                       |

## 📚 Ejemplo: TextInput

````typescript
// TextInput.tsx
import { forwardRef, type InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full rounded-md border px-3 py-2 text-sm transition-colors',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:border-primary-500',
        error: 'border-red-500 focus:border-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  /** Mensaje de error */
  error?: string;
  /** Label del input */
  label?: string;
}

/**
 * Input de texto con soporte para errores y label
 *
 * @example
 * ```tsx
 * <TextInput
 *   label="Email"
 *   error="Email inválido"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, variant, error, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            inputVariants({ variant: error ? 'error' : variant }),
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
          {...props}
        />
        {error && (
          <span id="error-message" className="text-sm text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
````

## 🔗 Skills Relacionadas

- `test-generator` - Para generar tests automáticamente
- `storybook-story-generator` - Para generar stories
- `jsdoc-generator` - Para documentar props
- `accessibility-checker` - Para validar a11y
