# Test Generator Skill

## 📋 Descripción

Genera tests unitarios exhaustivos con alta cobertura siguiendo los patrones del proyecto.

## 🎯 Cuándo Usar

- Después de implementar componente/hook/service
- Para garantizar coverage >80%
- Generar tests de edge cases

## 📝 Template de Tests

```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {})
    it('renders all variants correctly', () => {})
  })

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {})
    it('does not call onClick when disabled', async () => {})
  })

  describe('Accessibility', () => {
    it('is focusable via keyboard', async () => {})
    it('can be activated with Enter key', async () => {})
  })
})
```

## ✅ Coverage Target

- Componentes: >80%
- Hooks: >90%
- Services: >85%
- Utils: >95%
