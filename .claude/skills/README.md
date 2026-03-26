# 📚 Sports Dashboard - Skills Directory

Todas las skills especializadas para el desarrollo del proyecto Sports Dashboard.

## 📁 Estructura

```
skills/
├── orchestration/       # Orquestación y planificación
│   ├── project-orchestrator.md
│   ├── task-planner.md
│   └── milestone-tracker.md
├── github/              # Flujos de GitHub
│   ├── github-flow-executor.md
│   ├── conventional-commits.md
│   ├── pr-creator.md
│   └── issue-creator.md
├── development/         # Construcción de código
│   ├── component-builder.md
│   ├── hook-builder.md
│   └── service-builder.md
├── testing/             # Testing y calidad
│   ├── test-generator.md
│   ├── test-coverage-validator.md
│   └── accessibility-checker.md
├── design/              # Diseño y UI
│   ├── design-reader-mcp.md
│   ├── design-system-builder.md
│   └── tailwind-composer.md
├── quality/             # Code review
│   └── code-reviewer.md
└── documentation/       # Documentación
    ├── storybook-story-generator.md
    ├── jsdoc-generator.md
    └── architecture-documenter.md
```

## 🎯 Skills por Categoría

### 🎭 Orchestration (3 skills)

Coordinación de proyectos y planificación estratégica.

| Skill                    | Descripción                                       | Cuándo Usar              |
| ------------------------ | ------------------------------------------------- | ------------------------ |
| **project-orchestrator** | Coordina multi-agentes y ejecuta planes complejos | Proyectos >50 tareas     |
| **task-planner**         | Descompone épicas en tareas atómicas              | Planificación de sprints |
| **milestone-tracker**    | Rastrea progreso y detecta bloqueos               | Reportes de progreso     |

### 🔄 GitHub (4 skills)

Flujos de trabajo con Git y GitHub.

| Skill                    | Descripción                        | Cuándo Usar              |
| ------------------------ | ---------------------------------- | ------------------------ |
| **github-flow-executor** | Flujo completo: issue → PR → merge | Cada tarea de desarrollo |
| **conventional-commits** | Commits con formato convencional   | Cada commit              |
| **pr-creator**           | Crea PRs con templates             | Al completar tarea       |
| **issue-creator**        | Crea issues con criterios          | Planificación de backlog |

### 💻 Development (3 skills)

Construcción de componentes, hooks y servicios.

| Skill                 | Descripción                 | Cuándo Usar                |
| --------------------- | --------------------------- | -------------------------- |
| **component-builder** | Componentes React completos | Crear componentes UI       |
| **hook-builder**      | Custom hooks con tests      | Abstraer lógica compartida |
| **service-builder**   | Servicios con interceptores | Integrar APIs              |

### 🧪 Testing (3 skills)

Generación y validación de tests.

| Skill                       | Descripción                 | Cuándo Usar            |
| --------------------------- | --------------------------- | ---------------------- |
| **test-generator**          | Tests unitarios exhaustivos | Después de implementar |
| **test-coverage-validator** | Valida coverage >80%        | En CI, antes de merge  |
| **accessibility-checker**   | Valida WCAG 2.1 AA          | Componentes UI         |

### 🎨 Design (3 skills)

Diseño, tokens y componentes visuales.

| Skill                     | Descripción                    | Cuándo Usar             |
| ------------------------- | ------------------------------ | ----------------------- |
| **design-reader-mcp**     | Lee diseños desde Figma/Pencil | Antes de implementar UI |
| **design-system-builder** | Construye design system        | Inicio del proyecto     |
| **tailwind-composer**     | Genera clases Tailwind         | Implementar componentes |

### ✅ Quality (1 skill)

Code review y validación.

| Skill             | Descripción              | Cuándo Usar |
| ----------------- | ------------------------ | ----------- |
| **code-reviewer** | Valida contra estándares | Revisar PRs |

### 📚 Documentation (3 skills)

Generación de documentación.

| Skill                         | Descripción              | Cuándo Usar            |
| ----------------------------- | ------------------------ | ---------------------- |
| **storybook-story-generator** | Stories de Storybook     | Documentar componentes |
| **jsdoc-generator**           | JSDoc completo           | Documentar APIs        |
| **architecture-documenter**   | ADRs y docs arquitectura | Decisiones importantes |

## 🚀 Uso con Claude Code

### Ejecución Completa

```bash
claude code --project sports-dashboard

"Lee SPORTS_DASHBOARD_MASTER.md y ejecuta el plan completo usando
la skill project-orchestrator"
```

### Por Fases

```bash
"Ejecuta FASE 1: Design System usando component-builder y github-flow-executor"
```

### Tarea Individual

```bash
"Ejecuta TASK-011 usando component-builder"
```

## 📖 Guías

- **Guía de Ejecución**: `/guides/EXECUTION_GUIDE.md`
- **Documento Maestro**: `/SPORTS_DASHBOARD_MASTER.md`

## 🔗 Flujo Típico

```
1. task-planner → Descompone épica
2. issue-creator → Crea issues en GitHub
3. project-orchestrator → Coordina ejecución
4. component-builder / hook-builder / service-builder → Implementa
5. test-generator → Genera tests
6. storybook-story-generator → Documenta
7. code-reviewer → Valida calidad
8. github-flow-executor → PR y merge
9. milestone-tracker → Reporta progreso
```

## 📊 Métricas por Skill

| Skill                | Complejidad | Tiempo Típico |
| -------------------- | ----------- | ------------- |
| project-orchestrator | Alta        | Variable      |
| github-flow-executor | Media       | 15-20min      |
| component-builder    | Media       | 1.5-3h        |
| hook-builder         | Media       | 1-2h          |
| service-builder      | Alta        | 2-3h          |
| test-generator       | Baja        | 30-60min      |
| code-reviewer        | Media       | 10-15min      |

## ✅ Total de Skills

- **20 skills** (todas implementadas)
- Organizadas en 7 categorías
- Listas para usar con Claude Code

---

**Para empezar:** Ver `/guides/EXECUTION_GUIDE.md`
