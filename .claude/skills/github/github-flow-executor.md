# GitHub Flow Executor Skill

## 📋 Descripción

Ejecuta el flujo completo de desarrollo en GitHub: crear issue → crear rama → commits → PR → review → merge, siguiendo las convenciones del proyecto.

## 🎯 Cuándo Usar Esta Skill

- Cada tarea de desarrollo (componente, hook, service, test)
- Cuando necesitas seguir el flujo estándar del proyecto
- Para garantizar consistencia en el proceso de desarrollo

## 🔄 Flujo Completo

```
┌─────────────────────────────────────────────────────────────┐
│ 1️⃣  CREAR ISSUE                                             │
│ gh issue create --template task.yml                        │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 2️⃣  CREAR RAMA                                              │
│ git checkout develop && git pull                           │
│ git checkout -b feature/TASK-XXX-nombre                    │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 3️⃣  IMPLEMENTAR                                             │
│ - Código siguiendo estándares                              │
│ - Tests con coverage >80%                                  │
│ - Storybook story (si es componente)                       │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 4️⃣  COMMITS (Conventional Commits)                          │
│ git add .                                                  │
│ git commit -m "type(scope): descripción\n\nRefs #XX"       │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 5️⃣  PUSH Y CREAR PR                                         │
│ git push -u origin feature/TASK-XXX-nombre                 │
│ gh pr create --template pull_request_template.md           │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 6️⃣  VERIFICAR CI                                            │
│ gh pr checks                                               │
│ (Esperar a que pasen los tests)                            │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 7️⃣  REVIEW & MERGE                                          │
│ gh pr review --approve                                     │
│ gh pr merge --squash --delete-branch                       │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 Paso 1: Crear Issue

**Usar template existente:**

```bash
gh issue create \
  --title "[TASK-XXX] Nombre descriptivo de la tarea" \
  --body-file .github/ISSUE_TEMPLATE/task.yml \
  --label "type: task" \
  --label "phase: X-nombre-fase" \
  --label "priority: medium" \
  --label "agent: component"
```

**Campos obligatorios del template:**

- **Descripción**: Qué se debe implementar
- **Criterios de Aceptación**: Lista de checks
- **Dependencias**: Issues relacionados
- **Estimación**: Tiempo esperado
- **Agente Asignado**: Qué agente lo ejecutará
- **Tecnologías**: Stack involucrado

## 🔧 Paso 2: Crear Rama

**Convención de nombres:**

```bash
# Features
feature/TASK-XXX-nombre-descriptivo

# Bugfixes
fix/TASK-XXX-nombre-descriptivo

# Documentación
docs/TASK-XXX-nombre-descriptivo

# Tests
test/TASK-XXX-nombre-descriptivo

# Refactoring
refactor/TASK-XXX-nombre-descriptivo
```

**Comandos:**

```bash
# Asegurarse de estar en develop actualizado
git checkout develop
git pull origin develop

# Crear rama
git checkout -b feature/TASK-001-setup-vite
```

## 🔧 Paso 3: Implementar

**Checklist de implementación:**

- [ ] Código sigue estándares del proyecto
- [ ] TypeScript sin errores (`tsc --noEmit`)
- [ ] ESLint sin warnings (`npm run lint`)
- [ ] Prettier formateado (`npm run format`)
- [ ] Tests escritos (coverage >80%)
- [ ] Storybook story (si es componente)
- [ ] JSDoc completo

## 🔧 Paso 4: Commits

**Usar skill `conventional-commits`**

**Formato obligatorio:**

```
<type>(<scope>): <descripción>

[cuerpo opcional con más detalles]

Refs #ISSUE_NUMBER
```

**Types permitidos:**

- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Documentación
- `test` - Tests
- `refactor` - Refactoring
- `style` - Formateo
- `chore` - Mantenimiento
- `perf` - Performance
- `ci` - CI/CD

**Scopes permitidos:**

- `ui`, `hooks`, `api`, `config`, `types`, `test`, `docs`, `router`, `store`

**Ejemplo:**

```bash
git add .
git commit -m "feat(ui): add TextInput component

- Implement all variants (default, error, disabled, with-icon)
- Add forwardRef support for form integration
- Include ARIA attributes for accessibility

Refs #15"
```

## 🔧 Paso 5: Push y Crear PR

**Usar template existente:**

```bash
# Push
git push -u origin feature/TASK-001-setup-vite

# Crear PR usando template
gh pr create \
  --base develop \
  --title "feat(ui): Add TextInput component" \
  --body-file .github/pull_request_template.md \
  --label "type: feature" \
  --label "phase: 1-design-system"
```

**Campos obligatorios del template:**

- **Descripción**: Qué cambios se hicieron
- **Issue Relacionado**: `Closes #XX`
- **Tipo de Cambio**: Feature/Fix/Docs/etc
- **Checklist**: Código, Testing, Documentación
- **Cómo Probar**: Instrucciones para revisar

## 🔧 Paso 6: Verificar CI

**Monitorear checks:**

```bash
# Ver estado del PR actual
gh pr status

# Ver checks en detalle
gh pr checks

# Ver logs si falla
gh run view --log

# Si hay errores, corregir y push
git add .
git commit -m "fix(ui): address PR feedback"
git push
```

**CI debe pasar:**

- ✅ TypeScript build (`npm run build`)
- ✅ Linter (`npm run lint`)
- ✅ Tests (`npm run test:run`)
- ✅ Coverage >80%

## 🔧 Paso 7: Review & Merge

**Aprobar PR:**

```bash
gh pr review --approve --body "LGTM! ✅ Tests passing, code looks good."
```

**Merge con squash:**

```bash
gh pr merge --squash --delete-branch
```

**Resultado:**

- Commits squashed en uno solo
- Rama feature eliminada
- Issue cerrado automáticamente (por "Closes #XX")
- Develop actualizado

## ✅ Criterios de Éxito

- [ ] Issue creado con template correcto
- [ ] Rama sigue convención de nombres
- [ ] Commits siguen Conventional Commits
- [ ] PR incluye referencia al issue (`Closes #XX`)
- [ ] CI pasa completamente
- [ ] Review aprobado
- [ ] Merge exitoso sin conflictos

## 📚 Ejemplo Completo

```bash
# PASO 1: Crear issue
gh issue create \
  --title "[TASK-011] Crear componente TextInput" \
  --body "..." \
  --label "type: task,phase: 1-design-system,agent: component"

# PASO 2: Crear rama
git checkout develop && git pull
git checkout -b feature/TASK-011-text-input

# PASO 3: Implementar
# (Escribir código, tests, story)

# PASO 4: Commit
git add .
git commit -m "feat(ui): add TextInput component\n\nRefs #11"

# PASO 5: Push y PR
git push -u origin feature/TASK-011-text-input
gh pr create --base develop --title "feat(ui): Add TextInput component"

# PASO 6: Verificar CI
gh pr checks

# PASO 7: Merge
gh pr review --approve
gh pr merge --squash --delete-branch
```

## 🔗 Skills Relacionadas

- `conventional-commits` - Para formatear commits
- `pr-creator` - Para crear PRs desde templates
- `issue-creator` - Para crear issues desde templates
- `code-reviewer` - Para validar antes de aprobar
