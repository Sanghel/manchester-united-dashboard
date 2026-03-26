# Accessibility Checker Skill

## 📋 Descripción

Valida accesibilidad de componentes UI contra WCAG 2.1 AA.

## 🎯 Cuándo Usar

- Después de crear un componente UI
- Antes de aprobar PRs de componentes
- Testing de accesibilidad

## ✅ Validaciones

### ARIA

- [ ] Labels en inputs y botones
- [ ] Roles semánticos correctos
- [ ] Estados ARIA (aria-expanded, aria-disabled)
- [ ] Relaciones ARIA (aria-describedby, aria-labelledby)

### Teclado

- [ ] Todos los elementos interactivos son focusables
- [ ] Tab order lógico
- [ ] Enter/Space activan botones
- [ ] Escape cierra modals/dropdowns

### Contraste (WCAG AA)

- [ ] Texto normal: ratio ≥4.5:1
- [ ] Texto grande: ratio ≥3:1
- [ ] Elementos interactivos: ratio ≥3:1

### Screen Readers

- [ ] Contenido importante no está oculto
- [ ] Imágenes tienen alt text
- [ ] Formularios tienen labels asociados

## 🔧 Herramientas

```bash
# axe-core en tests
import { axe } from 'jest-axe';

it('has no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

# Storybook addon-a11y
# Automáticamente valida en cada story
```

## 📊 Checklist por Componente

```typescript
// Button.a11y.test.tsx
describe('Button Accessibility', () => {
  it('has no axe violations', async () => {
    const { container } = render(<Button>Click</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has accessible name', () => {
    render(<IconButton icon={<X />} ariaLabel="Close" />);
    expect(screen.getByRole('button')).toHaveAccessibleName('Close');
  });

  it('has proper focus indicators', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });
});
```

## 🔗 Skills Relacionadas

- `component-builder` - Aplica a11y desde el inicio
- `code-reviewer` - Valida a11y en PRs
