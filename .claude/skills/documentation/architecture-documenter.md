# Architecture Documenter Skill

## 📋 Descripción

Genera documentación de arquitectura y ADRs (Architecture Decision Records).

## 🎯 Cuándo Usar

- Después de decisiones arquitectónicas importantes
- Al finalizar fases
- Para documentar patrones

## 📝 Template de ADR

```markdown
# ADR-001: Usar React Query para Server State

## Estado

Aceptado

## Contexto

Necesitamos manejar estado del servidor (API calls, caching, sincronización)
de forma eficiente sin reimplementar soluciones existentes.

## Decisión

Usar TanStack Query (React Query) como solución de server state management.

## Consecuencias

### Positivas

- Caching automático de requests
- Invalidación inteligente
- Retry y error handling built-in
- DevTools para debugging
- Reducción de boilerplate

### Negativas

- Curva de aprendizaje
- Dependencia adicional
- Overhead para queries muy simples

## Alternativas Consideradas

1. **Redux Toolkit + RTK Query**: Más pesado, mayor complejidad
2. **SWR**: Similar pero menos features
3. **Custom hooks con fetch**: Mucho código a mantener

## Referencias

- [TanStack Query Docs](https://tanstack.com/query)
- Spike en branch `spike/react-query`
```

## 📊 Template de ARCHITECTURE.md

```markdown
# Arquitectura del Proyecto

## 📐 Principios

1. **Separation of Concerns**: Separación clara entre UI, lógica y datos
2. **Composition over Inheritance**: Componentes pequeños y composables
3. **Single Source of Truth**: Estado centralizado donde sea apropiado
4. **Explicit Dependencies**: Dependencias explícitas vía props/hooks

## 🏗️ Capas

### Presentación (UI)

- **Ubicación**: `src/components/`
- **Responsabilidad**: Renderizado visual, interacciones de usuario
- **Reglas**: No lógica de negocio, solo presentación

### Lógica de Aplicación

- **Ubicación**: `src/hooks/`
- **Responsabilidad**: Lógica compartida, efectos, estado local
- **Reglas**: Sin side effects globales, composables

### Servicios (Data)

- **Ubicación**: `src/services/`
- **Responsabilidad**: Comunicación con APIs, transformación de datos
- **Reglas**: Sin dependencias de UI, tipado estricto

## 🔄 Flujo de Datos
```

User Action → Component → Hook → Service → API
↑ │
└──────────── Response ────────┘

```

## 📦 Patrón de Módulos

Cada feature sigue este patrón:
```

feature/
├── Component.tsx # Componente principal
├── Component.test.tsx # Tests
├── Component.stories.tsx # Storybook
├── useFeature.ts # Lógica del feature
└── index.ts # Exports públicos

```

```

## 🔗 Skills Relacionadas

- `project-orchestrator` - Usa ADRs para decisiones
