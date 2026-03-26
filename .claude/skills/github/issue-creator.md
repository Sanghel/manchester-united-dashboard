# Issue Creator Skill

## 📋 Descripción

Crea issues en GitHub desde templates con criterios de aceptación, dependencias y estimaciones.

## 🎯 Cuándo Usar Esta Skill

- Al planificar tareas del backlog
- Parte del flujo de task-planner
- Para descomponer épicas

## 📝 Template de Issue

```yaml
name: 📋 Task
description: Tarea de desarrollo
title: '[TASK-XXX] '
labels: ['type: task']
body:
  - type: markdown
    attributes:
      value: |
        ## 📋 Descripción
        [Descripción detallada de qué se debe implementar]

  - type: checkboxes
    id: acceptance-criteria
    attributes:
      label: ✅ Criterios de Aceptación
      options:
        - label: Criterio 1
        - label: Criterio 2
        - label: Tests unitarios con coverage >80%
        - label: Documentación JSDoc completa

  - type: input
    id: dependencies
    attributes:
      label: 🔗 Dependencias
      placeholder: 'Depende de: #XX, Bloquea a: #YY'

  - type: input
    id: estimation
    attributes:
      label: ⏱️ Estimación
      placeholder: 'X horas'

  - type: dropdown
    id: agent
    attributes:
      label: 🤖 Agente Asignado
      options:
        - Component Agent
        - Hook Agent
        - Service Agent
        - Testing Agent
        - Docs Agent

  - type: textarea
    id: technologies
    attributes:
      label: 🛠️ Tecnologías Involucradas
      placeholder: |
        - React, TypeScript, Tailwind CSS
        - Vitest, React Testing Library
```

## 🔧 Comandos

```bash
# Crear issue con template
gh issue create \
  --title "[TASK-011] Crear componente TextInput" \
  --body "..." \
  --label "type: task,phase: 1-design-system,priority: high,agent: component"

# Crear múltiples issues desde archivo
for task in $(cat tasks.yml); do
  gh issue create --body "$task"
done
```

## 🔗 Skills Relacionadas

- `task-planner` - Genera el plan de issues
- `github-flow-executor` - Usa los issues creados
