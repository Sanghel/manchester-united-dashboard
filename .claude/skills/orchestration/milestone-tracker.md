# Milestone Tracker Skill

## 📋 Descripción

Rastrea progreso de fases, detecta bloqueos, genera reportes y mantiene métricas del proyecto actualizadas.

## 🎯 Cuándo Usar Esta Skill

- Durante la ejecución del proyecto
- Para reportes de progreso
- Detectar tareas atrasadas o bloqueadas
- Sprint reviews y retrospectivas

## 📊 Métricas Rastreadas

### Por Fase

- Tareas completadas vs pendientes
- Tiempo real vs estimado
- Coverage promedio
- Test pass rate
- Issues bloqueantes

### Globales

- Velocidad (tareas/día)
- Burndown chart
- Coverage total del proyecto
- Deuda técnica

## 🔄 Flujo de Tracking

```
1. RECOLECTAR DATOS
   ├─ Estado de issues (open/closed)
   ├─ Estado de PRs
   ├─ Resultados de CI
   ├─ Coverage reports
   └─ Tiempo por tarea

2. CALCULAR MÉTRICAS
   ├─ % completado por fase
   ├─ Velocidad actual
   ├─ ETA (estimated time of arrival)
   ├─ Trend de coverage
   └─ Blocker count

3. DETECTAR ANOMALÍAS
   ├─ Tareas estancadas >48h
   ├─ Coverage bajando
   ├─ CI frecuentemente fallando
   └─ Dependencias bloqueadas

4. GENERAR REPORTE
   ├─ Dashboard de progreso
   ├─ Alertas de bloqueos
   ├─ Recomendaciones
   └─ Próximos pasos
```

## 📈 Template de Reporte

```markdown
# 📊 Reporte de Progreso - [Fecha]

## 🎯 Resumen Ejecutivo

- **Fase Actual:** [Nombre de fase]
- **Progreso Global:** XX% (YY/ZZ tareas)
- **Estado:** En tiempo | Atrasado | Adelantado
- **ETA:** [Fecha estimada de finalización]

## 📉 Métricas por Fase

### FASE 0: Setup y Configuración

- ✅ Completada: 10/10 tareas (100%)
- ⏱️ Tiempo: 7.2h (vs 8h estimadas)
- ✅ Coverage: N/A
- ✅ CI: Pasando

### FASE 1: Design System

- 🔄 En progreso: 18/28 tareas (64%)
- ⏱️ Tiempo: 15h de 28h estimadas
- 📊 Coverage: 87%
- ✅ CI: Pasando
- ⚠️ Bloqueadores: 2

#### Tareas Bloqueadas

- TASK-025 (TeamCard): Esperando TASK-019 (Card base)
- TASK-026 (LeagueCard): Esperando TASK-019 (Card base)

### FASE 2: Hooks y Utilidades

- ⏸️ No iniciada: 0/15 tareas (0%)
- ⏱️ Estimado: 14h

## 📊 Métricas Globales

| Métrica         | Actual         | Target         | Estado |
| --------------- | -------------- | -------------- | ------ |
| Coverage        | 87%            | >80%           | ✅     |
| Test Pass Rate  | 100%           | 100%           | ✅     |
| Velocidad       | 3.2 tareas/día | 3.5 tareas/día | ⚠️     |
| CI Success Rate | 95%            | >90%           | ✅     |
| Issues Abiertos | 12             | -              | -      |
| PRs Pendientes  | 2              | -              | -      |

## 🔥 Alertas

### 🚨 Críticas

- Ninguna

### ⚠️ Advertencias

- Velocidad 8% por debajo del target
- 2 tareas bloqueadas en FASE 1

### 💡 Recomendaciones

1. Priorizar TASK-019 para desbloquear TASK-025 y TASK-026
2. Revisar estimaciones de FASE 1 (muy optimistas)
3. Considerar paralelizar tareas de FASE 2 mientras se completa FASE 1

## 📅 Próximos Hitos

- [ ] FASE 1 completada: 3 días (estimado)
- [ ] FASE 2 iniciada: 4 días
- [ ] FASE 2 completada: 8 días
- [ ] Merge a main: 10 días

## 📈 Burndown Chart
```

Tareas Restantes
│
70│ ╱
│ ╱
50│╱
│ ╲
30│ ╲***
│ ╲***
10│ ╲***Actual
│ ╲***
0 └─────────────────────────► Días
0 2 4 6 8 10 12 14
│
Hoy

```

## 🎯 Conclusión
El proyecto está progresando bien con un ligero retraso respecto al plan original.
Se recomienda priorizar tareas bloqueantes para mantener el flujo.
```

## 🔧 Comandos

```bash
# Generar reporte de progreso
gh run list --json conclusion,name | jq '.[] | select(.name=="CI")'

# Ver issues por estado
gh issue list --json state,title,labels | jq 'group_by(.state)'

# Calcular velocidad
gh issue list --state closed --json closedAt | jq 'length'

# Detectar tareas estancadas
gh issue list --json updatedAt,title | jq '.[] | select(.updatedAt < "2024-03-24")'
```

## 📊 Dashboard en GitHub

```markdown
<!-- Crear archivo PROGRESS.md en el repo -->

# 📊 Sports Dashboard - Progress Dashboard

**Última actualización:** [Fecha]

## 🎯 Progreso Global

![Progress](https://progress-bar.dev/64/?title=Completado&width=400)

## 📈 Por Fase

| Fase             | Tareas | Completadas | %    | Estado |
| ---------------- | ------ | ----------- | ---- | ------ |
| 0: Setup         | 10     | 10          | 100% | ✅     |
| 1: Design System | 28     | 18          | 64%  | 🔄     |
| 2: Hooks         | 15     | 0           | 0%   | ⏸️     |
| 3: Services      | 12     | 0           | 0%   | ⏸️     |
| 4: Features      | 22     | 0           | 0%   | ⏸️     |
| 5: Testing E2E   | 8      | 0           | 0%   | ⏸️     |
| 6: Docs          | 7      | 0           | 0%   | ⏸️     |

## 🔥 Issues Críticos

- TASK-019 bloqueando 2 tareas

## 📊 Métricas de Calidad

- **Coverage:** 87% ✅
- **Tests Passing:** 100% ✅
- **CI Success:** 95% ✅
```

## ✅ Checklist de Tracking

- [ ] Métricas actualizadas diariamente
- [ ] Bloqueadores identificados
- [ ] Reportes generados semanalmente
- [ ] Dashboard visible en README
- [ ] Alertas configuradas para anomalías

## 🔗 Skills Relacionadas

- `project-orchestrator` - Usa tracking para ajustar plan
- `task-planner` - Estimaciones iniciales
