# 🚀 Instrucciones para Ejecutar el Plan con Claude Code

## 📋 Resumen

Este documento explica cómo usar **Claude Code** para ejecutar el plan de desarrollo del **Sports Dashboard** utilizando las skills creadas y el documento maestro.

---

## 🎯 Prerequisitos

### 1. Repositorio Configurado

```bash
# Verificar que el repositorio existe y tiene las ramas
git remote -v
git branch -a

# Debe mostrar:
# origin  https://github.com/TU_USUARIO/sports-dashboard.git
# * develop
#   main
```

### 2. Skills Instaladas

Las skills deben estar en el directorio correcto para que Claude pueda acceder a ellas:

```bash
# Copiar skills al directorio de Claude Code
cp project-orchestrator-skill.md ~/.claude/skills/
cp github-flow-executor-skill.md ~/.claude/skills/
cp component-builder-skill.md ~/.claude/skills/
cp hook-builder-skill.md ~/.claude/skills/
cp conventional-commits-skill.md ~/.claude/skills/
cp design-reader-mcp-skill.md ~/.claude/skills/
cp code-reviewer-skill.md ~/.claude/skills/
```

### 3. Archivo Maestro Accesible

El documento `SPORTS_DASHBOARD_MASTER.md` debe estar en la raíz del proyecto o en una ubicación conocida.

---

## 🎬 Iniciando la Ejecución

### Opción 1: Ejecución Completa (Recomendado para Primera Vez)

```bash
# En Claude Code, ejecutar:
claude code --project sports-dashboard

# Prompt inicial:
"Lee el archivo SPORTS_DASHBOARD_MASTER.md y ejecuta el plan completo
siguiendo la metodología multi-agente. Comienza con la Fase 0: Setup
y Configuración. Usa las skills disponibles para cada tipo de tarea."
```

### Opción 2: Ejecución por Fases

```bash
# Para ejecutar solo una fase específica:
claude code --project sports-dashboard

# Prompt:
"Ejecuta únicamente la FASE 1: Design System del plan maestro.
Usa la skill component-builder para cada componente y sigue el
flujo de GitHub completo (issue → branch → code → test → PR → merge)."
```

### Opción 3: Ejecución de Tarea Individual

```bash
# Para una sola tarea:
claude code --project sports-dashboard

# Prompt:
"Ejecuta la tarea TASK-011: Crear componente TextInput.
Usa las skills: github-flow-executor y component-builder.
Sigue todos los criterios de aceptación del issue."
```

---

## 🤖 Modo Orquestador

### Configuración del Orquestador

Cuando Claude Code actúa como orquestador, debe:

1. **Leer el Plan Maestro**

   ```
   Leer SPORTS_DASHBOARD_MASTER.md completamente
   Identificar todas las fases y tareas
   Construir grafo de dependencias
   ```

2. **Priorizar Tareas**

   ```
   Ordenar tareas por fase
   Identificar tareas bloqueantes
   Marcar tareas que pueden ejecutarse en paralelo
   ```

3. **Asignar Agentes**

   ```
   Para cada tarea:
   - Determinar tipo (componente, hook, service, test, docs)
   - Asignar agente especializado
   - Verificar skills necesarias
   ```

4. **Ejecutar Fase por Fase**
   ```
   Para cada fase:
   - Verificar dependencias completadas
   - Ejecutar tareas en orden o paralelo
   - Validar criterios de aceptación
   - Reportar progreso
   ```

---

## 📝 Prompts Específicos por Tipo de Tarea

### Para Componentes UI

```
"Actúa como Component Agent. Crea el componente [NOMBRE] siguiendo
la skill component-builder. Incluye:
1. Componente con TypeScript + CVA
2. Tests unitarios (coverage >80%)
3. Storybook story con todas las variantes
4. Sigue el flujo GitHub completo usando github-flow-executor
5. Usa conventional-commits para los commits

Referencia: TASK-XXX en el documento maestro"
```

### Para Custom Hooks

```
"Actúa como Hook Agent. Crea el hook [NOMBRE] siguiendo la skill
hook-builder. Incluye:
1. Hook con TypeScript estricto
2. Manejo de cleanup
3. Tests exhaustivos (coverage >90%)
4. JSDoc con ejemplos
5. Sigue el flujo GitHub completo

Referencia: TASK-XXX en el documento maestro"
```

### Para Servicios y API

```
"Actúa como Service Agent. Crea el servicio [NOMBRE] siguiendo
estas especificaciones:
1. Cliente HTTP con Axios
2. Interceptores de request/response
3. Error handler centralizado
4. Transformers para normalizar datos
5. Hooks de React Query
6. Tests con MSW mocking

Referencia: TASK-XXX en el documento maestro"
```

### Para Tests E2E

```
"Actúa como Testing Agent. Crea tests E2E para [FEATURE] usando Playwright:
1. Page Objects
2. Test specs para flujos principales
3. Fixtures y mocks
4. Configuración en playwright.config.ts

Referencia: TASK-XXX en el documento maestro"
```

---

## 🔄 Flujo de Ejecución Automática

### Ejemplo de Sesión Completa

```bash
# 1. Iniciar Claude Code
claude code --project sports-dashboard

# 2. Prompt de inicio
>>> "Hola Claude, vamos a desarrollar el Sports Dashboard.
Lee el archivo SPORTS_DASHBOARD_MASTER.md y actúa como orquestador
usando la skill project-orchestrator.

Ejecuta las siguientes fases en orden:
- FASE 0: Setup y Configuración
- FASE 1: Design System

Para cada tarea:
1. Crea el issue usando el template de GitHub
2. Usa la skill apropiada (component-builder, hook-builder, etc.)
3. Sigue el flujo GitHub completo
4. Valida con la skill code-reviewer antes de merge

Reporta progreso después de cada tarea completada."

# 3. Claude comenzará a ejecutar
[Claude] "Entendido. Iniciando ejecución del plan.

=== FASE 0: Setup y Configuración ===

📋 TASK-001: Inicializar proyecto con Vite + React + TypeScript

1️⃣ Creando issue en GitHub...
   ✅ Issue #1 creado: https://github.com/user/sports-dashboard/issues/1

2️⃣ Creando rama feature/TASK-001-setup-vite...
   ✅ Rama creada

3️⃣ Implementando...
   ✅ Vite configurado
   ✅ React 18.x instalado
   ✅ TypeScript 5.x configurado
   ✅ Dev server funcionando

4️⃣ Haciendo commit...
   ✅ Commit: feat(config): initialize project with vite

5️⃣ Creando PR...
   ✅ PR #1 creado: https://github.com/user/sports-dashboard/pull/1

6️⃣ Verificando CI...
   ✅ CI pasando

7️⃣ Mergeando...
   ✅ PR mergeado y rama eliminada

✅ TASK-001 COMPLETADA (30 minutos)

Continuando con TASK-002..."

# 4. Claude continuará ejecutando todas las tareas
```

---

## 🎛️ Comandos de Control Durante la Ejecución

### Pausar la Ejecución

```
>>> "Pausa la ejecución después de completar la tarea actual.
Muéstrame un resumen del progreso."
```

### Ver Estado Actual

```
>>> "Muéstrame el estado actual del proyecto:
- Tareas completadas
- Tareas en progreso
- Tareas pendientes
- Bloqueos si hay"
```

### Saltar una Tarea

```
>>> "Salta la tarea TASK-XXX por ahora y continúa con la siguiente.
Márcala como bloqueada."
```

### Reintentar una Tarea

```
>>> "La tarea TASK-XXX falló. Analiza el error y reintenta con
una estrategia diferente."
```

### Generar Reporte

```
>>> "Genera un reporte de progreso de la FASE 1:
- Tareas completadas vs pendientes
- Tiempo real vs estimado
- Coverage actual
- Issues bloqueantes"
```

---

## 📊 Monitoreo del Progreso

### Dashboard en GitHub

Claude puede generar un dashboard de progreso:

```
>>> "Crea un archivo PROGRESS.md en el repositorio que muestre:
- Progreso por fase (% completado)
- Gráfico de burndown
- Métricas de calidad (coverage, test pass rate)
- Actualízalo después de cada tarea completada"
```

### Métricas Clave

Claude debe reportar:

- **Velocidad**: Tareas/hora
- **Calidad**: % tests passing, coverage promedio
- **Bloqueos**: Tareas bloqueadas y razones
- **Estimación**: Tiempo restante estimado

---

## 🚨 Manejo de Errores

### Si CI Falla

```
>>> "El CI falló en el PR #X. Analiza los logs, identifica el problema,
corrígelo y push de nuevo. Usa git commit --amend si es un fix menor."
```

### Si Tests Fallan

```
>>> "Los tests de TASK-XXX están fallando. Revisa los tests, corrige
el código o los tests según sea necesario, y asegúrate de que el
coverage sea >80%."
```

### Si Hay Conflictos de Merge

```
>>> "Hay conflictos en el PR #X. Resuelve los conflictos manteniendo
los cambios más recientes de develop y preservando la funcionalidad
de mi rama."
```

---

## 📚 Recursos Adicionales

### Documentos a Consultar

Durante la ejecución, Claude debe consultar:

- `SPORTS_DASHBOARD_MASTER.md` - Plan maestro
- `.github/ISSUE_TEMPLATE/task.yml` - Template de issues
- `.github/pull_request_template.md` - Template de PRs
- Skills en `~/.claude/skills/` - Guías de implementación

### Comandos Git Útiles

```bash
# Ver estado actual
git status
git log --oneline -10

# Ver branches
git branch -a

# Ver issues y PRs
gh issue list
gh pr list

# Ver progreso de CI
gh run list
gh run view
```

---

## ✅ Checklist de Ejecución Exitosa

Después de cada fase:

- [ ] Todas las tareas completadas
- [ ] Todos los PRs mergeados
- [ ] CI verde en develop
- [ ] Coverage global >80%
- [ ] Documentación actualizada
- [ ] No hay tareas bloqueadas sin resolver

---

## 🎯 Ejemplo: Ejecutar Solo Setup (Fase 0)

```bash
claude code --project sports-dashboard

>>> "
Ejecuta solo la FASE 0: Setup y Configuración del documento maestro.

Tareas a completar (TASK-001 a TASK-010):
1. Inicializar proyecto con Vite
2. Configurar Tailwind CSS
3. Configurar ESLint + Prettier
4. Configurar Husky + lint-staged
5. Configurar Vitest + Testing Library
6. Configurar Storybook
7. Crear estructura de carpetas base
8. Configurar path aliases
9. Crear .env.example
10. Configurar MSW para mocking

Para cada tarea:
- Usa github-flow-executor skill
- Sigue conventional-commits
- Crea issue, branch, implementa, test, PR, merge

Estimación total: 6-8 horas
Reporta progreso cada 2 tareas.
"

# Claude ejecutará las 10 tareas automáticamente
# Al finalizar, reportará:
✅ FASE 0 COMPLETADA
- 10/10 tareas completadas
- 7.2 horas reales vs 8h estimadas
- 0 errores bloqueantes
- Develop actualizado y CI verde

¿Deseas continuar con FASE 1: Design System?
```

---

## 🎓 Tips para Ejecución Óptima

1. **Sé Específico**: Indica claramente qué fase o tarea ejecutar
2. **Usa Skills**: Menciona qué skills usar para cada tipo de tarea
3. **Monitorea CI**: Pide a Claude que verifique CI antes de continuar
4. **Valida Coverage**: Asegúrate de que el coverage no baje
5. **Reportes Periódicos**: Solicita reportes de progreso regularmente
6. **Backup**: Haz backup antes de fases críticas (merge a main)

---

## 📞 Contacto y Ayuda

Si encuentras problemas durante la ejecución:

1. Pausa la ejecución
2. Revisa los logs de CI/CD
3. Consulta el documento maestro
4. Pide a Claude que analice el error específico

---

**¡Listo para ejecutar! 🚀**
