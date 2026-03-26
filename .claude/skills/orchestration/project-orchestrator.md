# Project Orchestrator Skill

## 📋 Descripción

Coordina la ejecución de proyectos complejos usando un enfoque multi-agente, asignando tareas especializadas a agentes específicos y monitoreando el progreso global.

## 🎯 Cuándo Usar Esta Skill

- Proyectos con >50 tareas interdependientes
- Desarrollo de aplicaciones completas desde cero
- Cuando hay múltiples fases secuenciales
- Necesitas coordinar diferentes especialidades (frontend, testing, docs)

## 🤖 Agentes Especializados

| Agente        | Responsabilidad                 | Entregables                   |
| ------------- | ------------------------------- | ----------------------------- |
| **Architect** | Decisiones técnicas, estructura | Diagramas, ADRs, configs      |
| **Setup**     | Tooling, CI/CD                  | Configs, workflows            |
| **Component** | Componentes UI                  | Componentes + tests + stories |
| **Hook**      | Custom hooks                    | Hooks + tests                 |
| **Service**   | API, servicios                  | Services + interceptores      |
| **Testing**   | Tests unitarios/E2E             | Test suites, coverage         |
| **Docs**      | Documentación                   | MD files, Storybook docs      |
| **Review**    | Code review                     | Feedback, approvals           |

## 📊 Flujo de Ejecución

```
1. ANALIZAR PLAN
   ├─ Leer documento maestro completo
   ├─ Identificar fases y dependencias
   └─ Crear grafo de dependencias

2. PRIORIZAR TAREAS
   ├─ Ordenar por dependencias (topological sort)
   ├─ Identificar tareas bloqueantes
   └─ Marcar tareas que pueden ejecutarse en paralelo

3. EJECUTAR FASE
   ├─ Para cada tarea en la fase:
   │  ├─ Verificar dependencias completadas
   │  ├─ Asignar agente especializado
   │  ├─ Ejecutar tarea (issue → branch → code → test → PR → merge)
   │  └─ Verificar criterios de aceptación
   └─ Al completar fase: merge develop → main

4. MONITOREAR PROGRESO
   ├─ Rastrear tareas completadas/pendientes/bloqueadas
   ├─ Reportar métricas (tiempo, cobertura, issues)
   └─ Identificar desviaciones del plan

5. DOCUMENTAR DECISIONES
   ├─ Registrar cambios arquitectónicos
   ├─ Actualizar ADRs (Architecture Decision Records)
   └─ Generar changelog
```

## 🔧 Comandos Principales

```bash
# Verificar estado del proyecto
gh issue list --label "phase: X-nombre-fase" --state open

# Ver dependencias de una tarea
gh issue view TASK-XXX

# Verificar progreso de fase
gh issue list --label "phase: X" --json state,title | jq '.[] | select(.state=="open")'

# Métricas de progreso
echo "Completadas: $(gh issue list --state closed | wc -l)"
echo "Pendientes: $(gh issue list --state open | wc -l)"
```

## ✅ Criterios de Éxito

- [ ] Todas las tareas de una fase completadas antes de pasar a la siguiente
- [ ] Sin tareas bloqueadas sin resolver
- [ ] Coverage global >80%
- [ ] CI pasando en todas las ramas
- [ ] Documentación actualizada por fase

## 📚 Ejemplo de Uso

```markdown
**Input:**
"Ejecuta el plan de desarrollo del Sports Dashboard siguiendo el documento maestro"

**Proceso:**

1. Leer FASE 0: Setup
2. Crear issues TASK-001 a TASK-010
3. Ejecutar TASK-001 con Setup Agent
4. Al completar TASK-001, ejecutar TASK-002
5. Continuar hasta completar FASE 0
6. Merge develop → main
7. Reportar: "FASE 0 completada: 10/10 tareas, 6.5h reales vs 8h estimadas"
8. Iniciar FASE 1

**Output:**

- Issues creados y cerrados automáticamente
- PRs mergeados
- Reporte de progreso en tiempo real
- Documentación actualizada
```

## 🚨 Manejo de Errores

- **Dependencia bloqueada**: Saltar tarea, continuar con otras disponibles
- **CI falla**: Detener fase, notificar, esperar corrección
- **Conflicto de merge**: Notificar, resolver manualmente, continuar
- **Timeout**: Si una tarea toma >2x estimación, escalar

## 🔗 Skills Relacionadas

- `task-planner` - Para descomponer tareas complejas
- `github-flow-executor` - Para ejecutar el flujo de cada tarea
- `milestone-tracker` - Para reportes de progreso
