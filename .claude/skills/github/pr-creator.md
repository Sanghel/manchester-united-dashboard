# PR Creator Skill

## 📋 Descripción

Crea Pull Requests desde templates con contexto automático, checklist completa y referencias a issues.

## 🎯 Cuándo Usar Esta Skill

- Al completar una tarea y hacer push
- Parte del flujo github-flow-executor
- Para PRs automatizados desde CI

## 📝 Template de PR

```markdown
## 📋 Descripción

[Descripción clara de los cambios realizados]

## 🔗 Issue Relacionado

Closes #[ISSUE_NUMBER]

## 📝 Tipo de Cambio

- [ ] 🆕 Nueva funcionalidad (feature)
- [ ] 🐛 Corrección de bug (fix)
- [ ] 📚 Documentación (docs)
- [ ] ♻️ Refactoring
- [ ] 🧪 Tests
- [ ] 🎨 Estilos

## ✅ Checklist

### Código

- [ ] Sigue los estándares del proyecto
- [ ] Self-review realizado
- [ ] Sin warnings de TypeScript/ESLint
- [ ] Código formateado con Prettier

### Testing

- [ ] Tests unitarios añadidos
- [ ] Coverage >80% (actual: XX%)
- [ ] Todos los tests pasan

### Documentación

- [ ] JSDoc completo
- [ ] Storybook story creada (si es componente)
- [ ] README actualizado (si aplica)

## 🧪 Cómo Probar

1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

## 📸 Screenshots (si aplica)

[Capturas de pantalla]
```

## 🔧 Comandos

```bash
# Crear PR con template
gh pr create \
  --base develop \
  --title "feat(ui): add Button component" \
  --body-file .github/pull_request_template.md \
  --label "type: feature" \
  --label "phase: 1-design-system"

# Crear PR con generación automática
gh pr create --fill
```

## 🔗 Skills Relacionadas

- `github-flow-executor` - Usa este skill
- `conventional-commits` - Para el título del PR
