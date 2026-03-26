# Storybook Story Generator Skill

## 📋 Descripción

Genera Storybook stories con todas las variantes de un componente, controles interactivos y documentación autodocs.

## 🎯 Cuándo Usar

- Después de crear un componente
- Para documentar variantes
- Testing visual

## 📝 Template de Story

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button con múltiples variantes y tamaños.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Variante visual del botón'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Variantes individuales
export const Primary: Story = {
  args: { children: 'Primary Button', variant: 'primary' }
};

export const Secondary: Story = {
  args: { children: 'Secondary Button', variant: 'secondary' }
};

// Showcases
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};
```

## 📊 Stories Requeridas

Para cada componente:

- ✅ Story por cada variante principal
- ✅ AllVariants showcase
- ✅ AllSizes showcase (si aplica)
- ✅ AllStates showcase (loading, disabled, error)
- ✅ Playground con controles interactivos

## 🔗 Skills Relacionadas

- `component-builder` - Genera stories automáticamente
- `jsdoc-generator` - Documentación en stories
