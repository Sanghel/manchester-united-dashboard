# Task Planner Skill

## 📋 Descripción

Descompone épicas en tareas atómicas con dependencias claras, criterios de aceptación y estimaciones.

## 🎯 Cuándo Usar Esta Skill

- Antes de iniciar una épica o feature compleja
- Para planificar sprints
- Cuando hay features con múltiples subtareas
- Para crear el backlog inicial del proyecto

## 🔄 Flujo de Planificación

```
1. ANALIZAR ÉPICA
   ├─ Leer descripción y objetivos
   ├─ Identificar funcionalidades principales
   └─ Determinar alcance

2. DESCOMPONER EN TAREAS
   ├─ Dividir en tareas atómicas (1-4h cada una)
   ├─ Asignar tipo (componente, hook, service, test, docs)
   └─ Asignar agente especializado

3. IDENTIFICAR DEPENDENCIAS
   ├─ Tareas bloqueantes (deben completarse primero)
   ├─ Tareas en paralelo (pueden ejecutarse simultáneamente)
   └─ Crear grafo de dependencias

4. DEFINIR CRITERIOS DE ACEPTACIÓN
   ├─ Lista de checks por tarea
   ├─ Métricas de calidad (coverage, tests)
   └─ Entregables esperados

5. ESTIMAR ESFUERZO
   ├─ Tiempo estimado por tarea
   ├─ Tiempo total de la épica
   └─ Buffer para imprevistos (15-20%)

6. GENERAR ISSUES
   ├─ Crear issue por cada tarea
   ├─ Usar template de GitHub
   └─ Asignar labels y prioridades
```

## 📊 Template de Tarea

```yaml
ID: TASK-XXX
Título: [Tipo] Descripción breve
Tipo: component | hook | service | test | docs
Agente: Component Agent | Hook Agent | Service Agent | Testing Agent | Docs Agent
Prioridad: critical | high | medium | low
Estimación: Xh
Fase: 0-setup | 1-design-system | 2-hooks | 3-services | 4-features | 5-testing | 6-docs

Descripción:
  [Descripción detallada de qué se debe implementar]

Criterios de Aceptación:
  - [ ] Criterio 1
  - [ ] Criterio 2
  - [ ] Tests unitarios (coverage >80%)
  - [ ] Documentación completa

Dependencias:
  - Depende de: #[issue_id]
  - Bloquea a: #[issue_id]

Tecnologías:
  - React, TypeScript, Tailwind CSS
  - Vitest, React Testing Library
  - [Otras específicas]
```

## 📚 Ejemplo: Épica "Sistema de Scores"

### Input

```
Épica: Implementar sistema de visualización de scores deportivos
- Mostrar scores en tiempo real
- Filtrar por liga
- Ver detalle de partido
```

### Output

**TASK-067: Crear componente ScoreBoard**

- Tipo: component
- Agente: Component Agent
- Estimación: 2h
- Dependencias: TASK-023 (ScoreCard), TASK-063 (useSportsScores)
- Criterios:
  - [ ] Componente con TypeScript
  - [ ] Integración con useSportsScores hook
  - [ ] Tests >80%
  - [ ] Storybook story

**TASK-068: Crear componente LiveScore**

- Tipo: component
- Agente: Component Agent
- Estimación: 1.5h
- Dependencias: TASK-023 (ScoreCard), TASK-066 (useLiveGames)
- Criterios:
  - [ ] Auto-refresh cada 30s
  - [ ] Indicador de partido en vivo
  - [ ] Tests >80%
  - [ ] Storybook story

**TASK-069: Crear componente ScoreList**

- Tipo: component
- Agente: Component Agent
- Estimación: 1.5h
- Dependencias: TASK-023 (ScoreCard)
- Criterios:
  - [ ] Paginación
  - [ ] Filtrado por liga
  - [ ] Tests >80%
  - [ ] Storybook story

**Total Estimado: 5h**
**Dependencias Externas: TASK-023, TASK-063, TASK-066**

## 🔧 Comandos

```bash
# Generar plan de tareas desde épica
task-planner plan --epic "Sistema de Scores" --output tasks.yml

# Crear issues en GitHub desde plan
task-planner create-issues --file tasks.yml

# Ver grafo de dependencias
task-planner graph --file tasks.yml
```

## ✅ Checklist de Planificación

- [ ] Épica dividida en tareas de 1-4h
- [ ] Cada tarea tiene tipo y agente asignado
- [ ] Dependencias identificadas
- [ ] Criterios de aceptación definidos
- [ ] Estimaciones realistas
- [ ] Issues listos para crear en GitHub

## 🔗 Skills Relacionadas

- `project-orchestrator` - Ejecuta el plan generado
- `issue-creator` - Crea issues desde el plan
- `milestone-tracker` - Rastrea progreso del plan
