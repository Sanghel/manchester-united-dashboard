# Test Coverage Validator Skill

## 📋 Descripción

Verifica que la cobertura de tests cumpla con los umbrales del proyecto.

## 🎯 Cuándo Usar

- En CI antes de merge
- Después de escribir tests
- Para validar PRs

## 📊 Umbrales

| Tipo        | Target  | Mínimo  |
| ----------- | ------- | ------- |
| Componentes | 80%     | 70%     |
| Hooks       | 90%     | 80%     |
| Services    | 85%     | 75%     |
| Utils       | 95%     | 90%     |
| **Global**  | **80%** | **75%** |

## 🔧 Comandos

```bash
# Ver coverage
npm run test:coverage

# Coverage de archivo específico
npm run test:coverage -- Button.test.tsx

# Fallar si coverage < 80%
npm run test:coverage -- --coverage.thresholds.global.lines=80
```
