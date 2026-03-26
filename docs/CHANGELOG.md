# Changelog

All notable changes are documented here. Follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.6.0] — Phase 6: Documentation

### Added

- `README.md` rewritten with project overview, stack, scripts, and structure
- `docs/ARCHITECTURE.md` — data flow, layers, QueryClient defaults
- `docs/COMPONENTS.md` — full component catalogue
- `docs/API.md` — endpoint reference, types, React Query hooks
- `docs/TESTING.md` — testing strategy, conventions, coverage targets
- `docs/STANDARDS.md` — commit, branching, code, accessibility standards
- `docs/CHANGELOG.md` — this file

## [0.5.0] — Phase 5: E2E Tests

### Added

- Playwright configuration (Chromium, dev server auto-start)
- 23 E2E tests across 5 spec files: home, standings, game, navigation, accessibility
- API fixture helper (`e2e/fixtures/api.ts`) using `page.route()`
- `index.html` title updated to "Manchester United Dashboard"

## [0.4.0] — Phase 4: Feature Components

### Added

- `ScoreBoard` and `LiveScore` feature components
- `StandingsTable` with form badges and team highlighting
- `GameStatsPanel` with dual-bar stat rows
- `Header` and `Sidebar` layout components
- `AppRouter` with React Router DOM 6
- Pages: Home, Standings, Game, Search, League, NotFound
- `useFiltersStore` (persisted) and `useUIStore` Zustand stores
- `App.tsx` wired with `QueryClientProvider` + `AppRouter`
- Installed: `react-router-dom`

## [0.3.0] — Phase 3: Services Layer

### Added

- Axios client with configurable base URL and timeout
- Request interceptor: `X-API-Key` header injection
- Response interceptor: error normalization to `ApiError`
- Sports domain types: `Match`, `Team`, `Standing`, `GameStats`, `League`
- Service functions: `getScores`, `getStandings`, `getMatchStats`, `getLeagues`
- React Query hooks: `useScores`, `useStandings`, `useMatchStats`, `useLeagues`
- `QueryClient` with `staleTime: 30s`, `gcTime: 5min`, `retry: 1`
- MSW handlers for all sports endpoints
- Mock fixture data for scores, standings, stats, leagues
- Installed: `axios`, `@tanstack/react-query`, `zustand`

## [0.2.0] — Phase 2: Utility Hooks

### Added

- `useDebounce`, `useDebouncedCallback`
- `useLocalStorage`
- `useMediaQuery`
- `useOutsideClick`
- `useToggle`
- `usePagination`
- `useInfiniteScroll`
- `useCopyToClipboard`
- `useCountdown`
- Utility functions: `formatDate`, `formatScore`, `formatStanding`, `formatDuration`, `formatNumber`

## [0.1.0] — Phase 1: Design System

### Added

- Button, IconButton, ButtonGroup
- Card, CardHeader, CardBody, CardFooter
- ScoreCard, StatsCard, TeamCard, LeagueCard
- Spinner, Skeleton, Badge, Chip, Toast, ErrorBoundary, EmptyState
- TextInput, SearchInput, SelectInput, Toggle, DatePicker
- Container, Grid, Flex, Stack, Divider, Spacer

## [0.0.1] — Phase 0: Project Setup

### Added

- Vite 5 + React 18 + TypeScript 5 project
- Tailwind CSS 3 + PostCSS
- ESLint 9 + Prettier
- Husky 9 + lint-staged + commitlint
- Vitest 1 + React Testing Library 14 + happy-dom
- Storybook 8 + autodocs
- MSW 2 server setup
- GitHub Actions CI (Lint, TypeScript, Tests, Build)
- PR template, issue templates, labels
- `.env.example`
- Path aliases (`@/` → `src/`)
