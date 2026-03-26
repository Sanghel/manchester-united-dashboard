# Architecture

## Overview

The dashboard is a single-page application (SPA) built with React and served by Vite. All data is fetched from a REST API (configurable via `VITE_API_BASE_URL`). The application has no backend of its own.

```
Browser
  └─ React SPA (Vite)
       ├─ React Router   → page routing
       ├─ TanStack Query → server state (cache, refetch)
       ├─ Zustand        → client state (filters, UI)
       └─ Axios          → HTTP transport
            └─ REST API (external)
```

## Data flow

```
User action
  → Zustand store update (filters/UI)
    → React Query hook re-fires query
      → Axios request + interceptors
        → API response
          → Query cache update
            → Component re-render
```

## Layers

### Services (`src/services/`)

- **`api/`** — Axios instance with request interceptor (X-API-Key) and response interceptor (error normalization to `ApiError`).
- **`sports/`** — Domain functions: `getScores`, `getStandings`, `getMatchStats`, `getLeagues`. Return typed domain objects.

### Hooks (`src/hooks/`)

- **`sports/`** — React Query wrappers: `useScores`, `useStandings`, `useMatchStats`, `useLeagues`. Each exposes `{ data, isLoading, isError }`.
- **Utility hooks** — `useDebounce`, `useLocalStorage`, `useMediaQuery`, `usePagination`, etc.

### Stores (`src/stores/`)

- **`useFiltersStore`** — persisted (localStorage) league/season/status/date filters.
- **`useUIStore`** — ephemeral sidebar open state and theme.

### Components (`src/components/`)

Three tiers:

| Tier          | Path        | Purpose                                           |
| ------------- | ----------- | ------------------------------------------------- |
| Design system | `ui/`       | Primitive, reusable, data-agnostic components     |
| Feature       | `features/` | Data-aware components composed from UI primitives |
| Layout        | `layout/`   | App shell (Header, Sidebar)                       |

### Pages (`src/pages/`)

Thin wrappers that compose feature components and read from stores.

### Router (`src/router/`)

`AppRouter` wraps the entire tree with `BrowserRouter`. Routes are defined as plain `<Route>` elements — no code-splitting for now.

## QueryClient defaults

| Setting                | Value | Rationale                            |
| ---------------------- | ----- | ------------------------------------ |
| `staleTime`            | 30 s  | Scores change frequently             |
| `gcTime`               | 5 min | Keep cache alive across tab switches |
| `retry`                | 1     | Fail fast for live data              |
| `refetchOnWindowFocus` | true  | Re-sync when tab regains focus       |
| mutation `retry`       | 0     | Never silently retry writes          |

## MSW (Mock Service Worker)

Used in unit/integration tests only (`src/tests/mocks/`). The handlers mirror the real API contract. E2E tests use Playwright `page.route()` interception instead.

## Environment-based configuration

All runtime config is injected via Vite's `import.meta.env`. No secrets are bundled — the API key is read at runtime from `VITE_API_KEY`.
