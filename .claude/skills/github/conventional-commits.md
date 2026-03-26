# Conventional Commits Skill

## 📋 Descripción

Genera commits siguiendo la especificación de Conventional Commits, garantizando consistencia en el historial de Git y facilitando la generación automática de changelogs.

## 🎯 Cuándo Usar Esta Skill

- Cada commit en el proyecto
- Antes de hacer push
- Al completar una funcionalidad o fix
- Para mantener historial limpio y semántico

## 📝 Formato Obligatorio

```
<type>(<scope>): <descripción>

[cuerpo opcional con más detalles]

[footer opcional con referencias]

Refs #ISSUE_NUMBER
```

## 🏷️ Types Permitidos

| Type       | Uso                         | Ejemplo                                 |
| ---------- | --------------------------- | --------------------------------------- |
| `feat`     | Nueva funcionalidad         | `feat(ui): add Button component`        |
| `fix`      | Corrección de bug           | `fix(api): handle timeout errors`       |
| `docs`     | Documentación               | `docs(readme): add setup instructions`  |
| `style`    | Formateo (no afecta lógica) | `style: format with prettier`           |
| `refactor` | Refactoring                 | `refactor(hooks): simplify useDebounce` |
| `test`     | Tests                       | `test(ui): add Card tests`              |
| `chore`    | Mantenimiento               | `chore(deps): update dependencies`      |
| `perf`     | Performance                 | `perf(api): add request caching`        |
| `ci`       | CI/CD                       | `ci: add e2e workflow`                  |
| `build`    | Build system                | `build: optimize bundle size`           |
| `revert`   | Revert de commit            | `revert: feat(ui): add Button`          |

## 🎯 Scopes Permitidos

| Scope    | Uso              |
| -------- | ---------------- |
| `ui`     | Componentes UI   |
| `hooks`  | Custom hooks     |
| `api`    | Servicios/API    |
| `config` | Configuración    |
| `deps`   | Dependencias     |
| `types`  | TypeScript types |
| `test`   | Testing          |
| `docs`   | Documentación    |
| `router` | Routing          |
| `store`  | Estado global    |
| `styles` | Estilos globales |

## ✍️ Reglas de Escritura

### Descripción (Subject)

- **Máximo 72 caracteres**
- Usar imperativo ("add" no "added" ni "adds")
- No capitalizar primera letra
- No punto final
- Ser específico y conciso

✅ **Buenos ejemplos:**

- `feat(ui): add Button component with variants`
- `fix(api): handle network timeout errors`
- `test(hooks): add useDebounce unit tests`

❌ **Malos ejemplos:**

- `feat: stuff` (muy vago)
- `Fix button.` (capitalizado, punto final)
- `Added new button component with primary and secondary variants and loading state` (muy largo)

### Cuerpo (Body)

- **Opcional pero recomendado para cambios complejos**
- Separar del subject con línea en blanco
- Wrap a 72 caracteres
- Explicar **qué** y **por qué**, no **cómo**
- Usar viñetas para múltiples cambios

✅ **Buen ejemplo:**

```
feat(ui): add Button component

- Implement all variants (primary, secondary, outline)
- Add loading state with spinner
- Include forwardRef for form integration
- Support for left/right icons
```

### Footer

- **Obligatorio para referencias a issues**
- Formato: `Refs #ISSUE_NUMBER`
- Breaking changes: `BREAKING CHANGE: descripción`
- Múltiples issues: `Refs #15, #16`

## 📚 Ejemplos Completos

### Feature Simple

```bash
git commit -m "feat(ui): add TextInput component

Refs #11"
```

### Feature Compleja

```bash
git commit -m "feat(ui): add ScoreCard component

- Display team logos and names
- Show live score updates
- Support different game statuses (live, finished, upcoming)
- Add hover animations
- Include favorite team indicator

Refs #23"
```

### Bugfix

```bash
git commit -m "fix(api): handle timeout in sports service

Network requests were failing silently after 10s. Now properly
handle timeouts and show error toast to user.

Refs #45"
```

### Tests

```bash
git commit -m "test(ui): add Button unit tests

- Test all variants render correctly
- Test onClick handler fires
- Test disabled state blocks interaction
- Test keyboard navigation
- Coverage: 94%

Refs #15"
```

### Documentación

```bash
git commit -m "docs(ui): add Button Storybook stories

- Add stories for all variants
- Add interactive controls
- Document all props with descriptions
- Add usage examples

Refs #15"
```

### Refactoring

```bash
git commit -m "refactor(hooks): simplify useDebounce implementation

Replace multiple useState calls with single useRef.
Reduces re-renders and improves performance.

Refs #67"
```

### Breaking Change

```bash
git commit -m "feat(api): change response format

BREAKING CHANGE: API responses now return data in camelCase
instead of snake_case. Update all transformers accordingly.

Refs #89"
```

### Multiple Issues

```bash
git commit -m "fix(ui): resolve styling inconsistencies

- Fix Button padding in Safari
- Align Card shadows across browsers
- Standardize input border radius

Refs #34, #35, #36"
```

## 🔧 Comandos Git

```bash
# Commit simple
git add .
git commit -m "feat(ui): add Button component

Refs #15"

# Commit con cuerpo
git add .
git commit -m "feat(ui): add Button component

- Implement all variants
- Add loading state
- Include accessibility features

Refs #15"

# Amend (corregir último commit)
git commit --amend -m "feat(ui): add Button component with variants

Refs #15"

# Ver historial con formato
git log --oneline --graph --all
```

## ✅ Validación con Commitlint

**Configuración (`commitlint.config.js`):**

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'perf',
        'ci',
        'build',
        'revert',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'ui',
        'hooks',
        'api',
        'config',
        'deps',
        'types',
        'test',
        'docs',
        'router',
        'store',
        'styles',
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-max-length': [2, 'always', 72],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
}
```

## 🚨 Errores Comunes y Soluciones

### ❌ Error 1: Subject muy largo

```bash
# ❌ Incorrecto (>72 caracteres)
git commit -m "feat(ui): add new button component with multiple variants including primary secondary outline and ghost with loading states"

# ✅ Correcto
git commit -m "feat(ui): add Button component with variants

- primary, secondary, outline, ghost
- loading states supported

Refs #15"
```

### ❌ Error 2: Type inválido

```bash
# ❌ Incorrecto
git commit -m "update(ui): modify Button"

# ✅ Correcto
git commit -m "refactor(ui): modify Button structure"
```

### ❌ Error 3: Subject capitalizado

```bash
# ❌ Incorrecto
git commit -m "feat(ui): Add Button component"

# ✅ Correcto
git commit -m "feat(ui): add Button component"
```

### ❌ Error 4: Sin referencia a issue

```bash
# ❌ Incorrecto
git commit -m "feat(ui): add Button component"

# ✅ Correcto
git commit -m "feat(ui): add Button component

Refs #15"
```

## 📊 Beneficios

1. **Historial Semántico**: Fácil de entender qué cambió
2. **Changelog Automático**: Herramientas pueden generar CHANGELOG.md
3. **Versionado Semántico**: Determinar major/minor/patch automáticamente
4. **Navegación Rápida**: Buscar commits por tipo o scope
5. **CI/CD**: Triggers automáticos basados en tipos

## 🔗 Skills Relacionadas

- `github-flow-executor` - Usa conventional commits en el flujo
- `pr-creator` - Title del PR sigue mismo formato
- `changelog-generator` - Genera changelog desde commits
