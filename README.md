# Manchester United Dashboard

A real-time sports dashboard for Manchester United — live scores, league standings, and match statistics. Built with React 18, TypeScript 5, TanStack Query, and Tailwind CSS.

## Features

- Live match scores with auto-refresh (30s stale time)
- Premier League standings table with Manchester United highlighted
- Per-match statistics panel (possession, shots, passes, etc.)
- Persisted filters (league, season, status) via Zustand
- Fully accessible (ARIA landmarks, labelled regions)
- Responsive layout with mobile sidebar

## Stack

| Layer         | Technology                                |
| ------------- | ----------------------------------------- |
| UI            | React 18, TypeScript 5, Tailwind CSS 3    |
| Data fetching | TanStack Query 5, Axios                   |
| State         | Zustand 4                                 |
| Routing       | React Router DOM 6                        |
| Build         | Vite 5                                    |
| Unit tests    | Vitest 1, React Testing Library 14, MSW 2 |
| E2E tests     | Playwright                                |
| Components    | Storybook 8                               |

## Getting started

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local

# Start dev server
npm run dev
```

Open `http://localhost:5173`.

## Environment variables

| Variable            | Default | Description                        |
| ------------------- | ------- | ---------------------------------- |
| `VITE_API_BASE_URL` | `/api`  | Sports API base URL                |
| `VITE_API_KEY`      | —       | API key sent as `X-API-Key` header |
| `VITE_API_TIMEOUT`  | `15000` | Request timeout in ms              |

## Scripts

```bash
npm run dev          # Dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint
npm run test         # Vitest watch mode
npm run test:run     # Vitest single run
npm run test:coverage # Coverage report
npm run test:e2e     # Playwright E2E tests
npm run storybook    # Storybook dev server
```

## Project structure

```
src/
  components/
    ui/          # Design system: buttons, cards, feedback, inputs, layout
    features/    # Feature components: ScoreBoard, StandingsTable, GameStatsPanel
    layout/      # App shell: Header, Sidebar
  hooks/
    sports/      # useScores, useStandings, useMatchStats, useLeagues
    use*/        # Utility hooks: useDebounce, useLocalStorage, etc.
  pages/         # Home, Standings, Game, Search, League, NotFound
  router/        # AppRouter (BrowserRouter + Routes)
  services/
    api/         # Axios client, interceptors, types
    sports/      # Service functions, domain types
  stores/        # Zustand: useFiltersStore, useUIStore
  lib/           # queryClient, format utilities, utils
  tests/
    mocks/       # MSW server, handlers, fixture data
e2e/             # Playwright specs + API fixtures
```

## Testing

```bash
# Unit + integration (Vitest + MSW)
npm run test:run

# E2E (Playwright — requires dev server)
npm run test:e2e
```

The test suite includes 415 unit tests and 23 E2E tests.

## Contributing

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/).
All components require a Storybook story and >80% test coverage.
