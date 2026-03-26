# Design Reader MCP Skill

## 📋 Descripción

Lee y extrae especificaciones de diseño desde MCP servers (Figma, Pencil, etc.) para implementar componentes y layouts con precisión pixel-perfect.

## 🎯 Cuándo Usar Esta Skill

- Antes de implementar componentes UI
- Para obtener design tokens (colores, tipografía, espaciado)
- Cuando hay mockups o wireframes en Figma/Pencil
- Para mantener consistencia visual con diseños

## 🔌 MCP Servers Compatibles

| Server        | Propósito                 | Capacidades                  |
| ------------- | ------------------------- | ---------------------------- |
| **Figma**     | Diseños UI/UX             | Componentes, estilos, assets |
| **Pencil**    | Wireframes                | Layouts, flujos, mockups     |
| **BioRender** | Ilustraciones científicas | Diagramas técnicos           |
| **Canva**     | Gráficos marketing        | Visuales, banners            |

## 📖 Flujo de Lectura de Diseño

```
1. CONECTAR MCP
   ├─ Verificar servidor disponible
   └─ Autenticar si es necesario

2. BUSCAR DISEÑO
   ├─ Por nombre de proyecto
   ├─ Por URL de archivo
   └─ Por componente específico

3. EXTRAER INFORMACIÓN
   ├─ Design tokens (colores, tipografía)
   ├─ Componentes y variantes
   ├─ Dimensiones y espaciado
   ├─ Assets (íconos, imágenes)
   └─ Estados (hover, active, disabled)

4. TRANSFORMAR A CÓDIGO
   ├─ Generar Tailwind classes
   ├─ Crear variantes con CVA
   ├─ Definir tokens CSS
   └─ Exportar assets

5. VALIDAR
   ├─ Verificar dimensiones
   ├─ Comprobar accesibilidad (contraste)
   └─ Confirmar responsive
```

## 🔧 Uso con Figma MCP

### Conectar y Buscar

```typescript
// 1. Buscar archivo de diseño
const designs = await figma.searchFiles({
  query: 'Sports Dashboard Design System',
})

// 2. Obtener componentes del archivo
const components = await figma.getFileComponents({
  fileKey: designs[0].key,
})

// 3. Filtrar componente específico
const buttonComponent = components.find((c) => c.name === 'Button/Primary')
```

### Extraer Design Tokens

```typescript
// Obtener estilos del componente
const componentStyles = await figma.getComponentStyles({
  fileKey: fileKey,
  componentId: buttonComponent.id,
})

// Extraer colores
const colors = {
  primary: componentStyles.fills[0].color, // { r, g, b, a }
  hover: componentStyles.effects.find((e) => e.type === 'DROP_SHADOW')?.color,
}

// Extraer tipografía
const typography = {
  fontFamily: componentStyles.fontFamily,
  fontSize: componentStyles.fontSize,
  fontWeight: componentStyles.fontWeight,
  lineHeight: componentStyles.lineHeight,
  letterSpacing: componentStyles.letterSpacing,
}

// Extraer espaciado
const spacing = {
  paddingX: componentStyles.paddingLeft, // px
  paddingY: componentStyles.paddingTop,
  borderRadius: componentStyles.cornerRadius,
}
```

### Transformar a Tailwind

```typescript
function rgbToTailwind(color: { r: number; g: number; b: number }): string {
  const r = Math.round(color.r * 255)
  const g = Math.round(color.g * 255)
  const b = Math.round(color.b * 255)

  return `rgb(${r}, ${g}, ${b})`
}

// Generar config de Tailwind
const tailwindConfig = {
  colors: {
    primary: {
      500: rgbToTailwind(colors.primary),
      600: rgbToTailwind(colors.hover),
    },
  },
  fontSize: {
    button: [`${typography.fontSize}px`, typography.lineHeight],
  },
  borderRadius: {
    button: `${spacing.borderRadius}px`,
  },
  padding: {
    'button-x': `${spacing.paddingX}px`,
    'button-y': `${spacing.paddingY}px`,
  },
}
```

### Generar Componente

```typescript
// Basado en specs de Figma, generar:

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-button font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        // ... otras variantes del diseño
      },
      size: {
        md: 'h-10 px-button-x py-button-y text-button',
        // ... otros tamaños del diseño
      },
    },
  }
)
```

## 🎨 Extracción de Assets

```typescript
// Exportar íconos SVG
const icons = await figma.getComponentAssets({
  componentId: iconComponent.id,
  format: 'svg',
  scale: 1,
})

// Guardar en proyecto
await saveFile({
  path: 'public/assets/icons/chevron-down.svg',
  content: icons.svg,
})

// Exportar imágenes
const images = await figma.getComponentAssets({
  componentId: logoComponent.id,
  format: 'png',
  scale: 2, // @2x para retina
})

await saveFile({
  path: 'public/assets/images/logo@2x.png',
  content: images.png,
})
```

## 📐 Validación de Diseño

```typescript
// Verificar contraste de accesibilidad (WCAG AA)
function checkContrast(fg: RGB, bg: RGB): boolean {
  const contrast = calculateContrastRatio(fg, bg)
  return contrast >= 4.5 // WCAG AA para texto normal
}

if (!checkContrast(colors.primary, colors.background)) {
  console.warn('⚠️  Contraste insuficiente para accesibilidad')
}

// Verificar dimensiones responsive
const breakpoints = {
  mobile: await figma.getComponentVariant({ name: 'Button/Primary/Mobile' }),
  tablet: await figma.getComponentVariant({ name: 'Button/Primary/Tablet' }),
  desktop: await figma.getComponentVariant({ name: 'Button/Primary/Desktop' }),
}
```

## 📚 Ejemplo Completo: Button Component

```typescript
// 1. Buscar diseño en Figma
const file = await figma.searchFiles({ query: 'Design System' })
const buttons = await figma.getComponents({
  fileKey: file[0].key,
  filter: 'Button',
})

// 2. Extraer todas las variantes
const variants = {
  primary: await figma.getComponentStyles({ id: buttons.primary.id }),
  secondary: await figma.getComponentStyles({ id: buttons.secondary.id }),
  outline: await figma.getComponentStyles({ id: buttons.outline.id }),
}

// 3. Generar código
const generatedComponent = `
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-[${rgbToTailwind(variants.primary.fill)}] text-white hover:bg-[${rgbToTailwind(variants.primary.hover)}]',
        secondary: 'bg-[${rgbToTailwind(variants.secondary.fill)}] text-gray-900 hover:bg-[${rgbToTailwind(variants.secondary.hover)}]',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base'
      }
    }
  }
);
`

// 4. Guardar componente
await saveFile({
  path: 'src/components/ui/buttons/Button/Button.tsx',
  content: generatedComponent,
})
```

## 🔄 Sincronización Continua

```typescript
// Detectar cambios en diseño de Figma
const lastSync = await getLastSyncTimestamp()

const updates = await figma.getFileVersions({
  fileKey: fileKey,
  since: lastSync,
})

if (updates.length > 0) {
  console.log(`🔄 ${updates.length} cambios detectados en Figma`)

  // Re-generar componentes afectados
  for (const update of updates) {
    const affectedComponents = await figma.getChangedComponents({
      versionId: update.id,
    })

    for (const component of affectedComponents) {
      await regenerateComponent(component)
    }
  }
}
```

## ✅ Checklist de Extracción

- [ ] Colores extraídos y mapeados a Tailwind
- [ ] Tipografía configurada (familia, tamaños, pesos)
- [ ] Espaciado y padding definidos
- [ ] Border radius configurado
- [ ] Sombras (box-shadow) extraídas
- [ ] Estados (hover, active, disabled) capturados
- [ ] Assets exportados (SVG @1x, PNG @2x)
- [ ] Contraste verificado (WCAG AA mínimo)
- [ ] Breakpoints responsive definidos

## 🚨 Casos Especiales

### Componentes con Múltiples Estados

```typescript
// Extraer todos los estados de un botón
const states = {
  default: await figma.getComponent({ name: 'Button/Primary/Default' }),
  hover: await figma.getComponent({ name: 'Button/Primary/Hover' }),
  active: await figma.getComponent({ name: 'Button/Primary/Active' }),
  disabled: await figma.getComponent({ name: 'Button/Primary/Disabled' }),
  loading: await figma.getComponent({ name: 'Button/Primary/Loading' }),
}

// Generar clases para cada estado
const stateClasses = {
  default: extractClasses(states.default),
  hover: `hover:${extractClasses(states.hover)}`,
  active: `active:${extractClasses(states.active)}`,
  disabled: `disabled:${extractClasses(states.disabled)}`,
}
```

### Design Tokens Globales

```typescript
// Extraer tokens de colores primarios
const colorTokens = await figma.getColorStyles({ fileKey })

const tailwindColors = Object.fromEntries(
  colorTokens.map((token) => [
    token.name.toLowerCase().replace(' ', '-'),
    rgbToTailwind(token.color),
  ])
)

// Guardar en tailwind.config.ts
updateTailwindConfig({
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
})
```

## 🔗 Skills Relacionadas

- `component-builder` - Usa diseños para construir componentes
- `design-system-builder` - Construye design system completo
- `tailwind-composer` - Genera clases Tailwind desde diseño
