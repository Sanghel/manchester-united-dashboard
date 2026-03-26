# Code Audit — Manchester United Dashboard Redesign

**Audit Date:** 2026-03-25
**Branch:** feature/002-code-audit
**Auditor:** Automated — Task REDESIGN-002

---

## 1. Project Structure

```
sports-dashboard/
├── src/
│   ├── App.tsx                          # Root component; wraps QueryClientProvider + AppRouter
│   ├── App.css / index.css              # Global styles (Tailwind base)
│   ├── main.tsx                         # Vite entry point
│   ├── vite-env.d.ts
│   │
│   ├── assets/                          # Static assets (react.svg placeholder)
│   │
│   ├── components/
│   │   ├── features/                    # Domain-connected components
│   │   │   ├── leagues/                 # (index only, no implementations yet)
│   │   │   ├── scores/
│   │   │   │   ├── LiveScore/           # Thin wrapper: ScoreBoard filtered to status=live
│   │   │   │   └── ScoreBoard/          # Grid of ScoreCards, uses useScores hook
│   │   │   ├── standings/
│   │   │   │   └── StandingsTable/      # Full standings table with form badges + MU highlight
│   │   │   └── stats/
│   │   │       └── GameStatsPanel/      # Head-to-head stat bars for a match
│   │   │
│   │   ├── layout/                      # App-shell components
│   │   │   ├── Header/                  # Top bar with hamburger, MU brand, season label
│   │   │   └── Sidebar/                 # Collapsible nav (Home, Scores, Standings, Search)
│   │   │
│   │   └── ui/                          # Pure, headless-style primitives
│   │       ├── buttons/
│   │       │   ├── Button/              # CVA button (primary/secondary/outline/ghost/danger/success)
│   │       │   ├── ButtonGroup/         # Wraps multiple Buttons in a joined group
│   │       │   └── IconButton/          # Square icon-only button
│   │       ├── cards/
│   │       │   ├── Card/                # Base card container (CVA variants)
│   │       │   ├── CardBody/            # Card content slot
│   │       │   ├── CardFooter/          # Card footer slot
│   │       │   ├── CardHeader/          # Card header slot with title/subtitle/action
│   │       │   ├── LeagueCard/          # Displays a league (name, country, season, team count)
│   │       │   ├── ScoreCard/           # Match score display (home/away, status badge, time)
│   │       │   ├── StatsCard/           # KPI card with value, trend arrow, icon
│   │       │   └── TeamCard/            # Team info card (logo, record, position, points)
│   │       ├── feedback/
│   │       │   ├── Badge/               # CVA pill badge (default/primary/success/warning/danger/info)
│   │       │   ├── Chip/                # Removable/selectable chip
│   │       │   ├── EmptyState/          # Zero-data placeholder with title + description
│   │       │   ├── ErrorBoundary/       # React class error boundary
│   │       │   ├── Skeleton/            # Animated placeholder (text/heading/circle/card variants)
│   │       │   ├── Spinner/             # Loading spinner (xs–xl sizes)
│   │       │   └── Toast/               # Notification toast
│   │       ├── inputs/
│   │       │   ├── DatePicker/          # Native date input with label + error support
│   │       │   ├── SearchInput/         # Text input with embedded search icon
│   │       │   ├── SelectInput/         # Styled native select with label + error
│   │       │   ├── TextInput/           # Styled text input
│   │       │   └── Toggle/              # Boolean on/off toggle switch
│   │       └── layout/
│   │           ├── Container/           # Max-width page container
│   │           ├── Divider/             # Horizontal / vertical rule
│   │           ├── Flex/                # Flexbox utility wrapper
│   │           ├── Grid/                # CSS grid utility wrapper
│   │           ├── Spacer/              # Flexible whitespace element
│   │           └── Stack/               # Vertical/horizontal spacing stack
│   │
│   ├── constants/
│   │   └── index.ts                     # Empty placeholder (no constants defined yet)
│   │
│   ├── context/
│   │   └── index.ts                     # Empty placeholder (no contexts defined yet)
│   │
│   ├── hooks/
│   │   ├── sports/
│   │   │   ├── useLeagues.ts            # React Query wrapper for getLeagues
│   │   │   ├── useMatchStats.ts         # React Query wrapper for getMatchStats(matchId)
│   │   │   ├── useScores.ts             # React Query wrapper for getScores(params)
│   │   │   └── useStandings.ts          # React Query wrapper for getStandings(params)
│   │   ├── useCopyToClipboard/          # Copies text to clipboard, returns copied state
│   │   ├── useCountdown/                # Countdown timer to a target Date
│   │   ├── useDebounce/                 # Debounces a value
│   │   ├── useDebouncedCallback/        # Debounces a callback function
│   │   ├── useInfiniteScroll/           # IntersectionObserver-based infinite scroll
│   │   ├── useLocalStorage/             # Persists state in localStorage
│   │   ├── useMediaQuery/               # Matches a CSS media query
│   │   ├── useOutsideClick/             # Detects clicks outside a ref
│   │   ├── usePagination/               # Pagination state and helpers
│   │   └── useToggle/                   # Boolean toggle state
│   │
│   ├── lib/
│   │   ├── format.ts                    # Formatting utilities (date, score, standing, duration, number)
│   │   ├── queryClient.ts               # React Query client (staleTime=30s, gcTime=5min, retry=1)
│   │   └── utils.ts                     # cn() — clsx + tailwind-merge
│   │
│   ├── pages/
│   │   ├── Game/                        # /game/:id — shows GameStatsPanel for a match
│   │   ├── Home/                        # / and /scores — shows ScoreBoard
│   │   ├── League/                      # /league/:id — shows StandingsTable for league
│   │   ├── NotFound/                    # * catch-all 404 page
│   │   ├── Search/                      # /search — debounced search with ScoreBoard results
│   │   └── Standings/                   # /standings — StandingsTable with MU highlight
│   │
│   ├── router/
│   │   └── AppRouter.tsx                # BrowserRouter with Header + Sidebar shell + page routes
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.ts                # Axios instance (baseURL, timeout, headers)
│   │   │   ├── types.ts                 # ApiResponse, PaginatedResponse, ApiError, SortOrder
│   │   │   └── interceptors/
│   │   │       ├── request.ts           # Attaches VITE_API_KEY as X-API-Key header
│   │   │       └── response.ts          # Normalizes errors into ApiError shape
│   │   └── sports/
│   │       ├── sportsService.ts         # API call implementations
│   │       └── types.ts                 # Domain types (Match, Standing, GameStats, League, etc.)
│   │
│   ├── store/
│   │   └── index.ts                     # Empty placeholder (legacy, superseded by stores/)
│   │
│   ├── stores/
│   │   ├── useFiltersStore.ts           # Zustand: league, season, status, date filters (persisted)
│   │   └── useUIStore.ts                # Zustand: sidebarOpen, theme (light/dark)
│   │
│   ├── tests/
│   │   ├── mocks/
│   │   │   ├── data/                    # Mock fixtures: leagues, scores, standings, stats
│   │   │   ├── handlers.ts              # MSW request handlers
│   │   │   └── server.ts                # MSW server setup
│   │   ├── setup.ts                     # Vitest setup (jest-dom matchers)
│   │   └── utils/test-utils.tsx         # Custom render() with QueryClient + Router providers
│   │
│   └── types/
│       └── index.ts                     # Empty placeholder (global types not yet defined)
│
├── e2e/                                 # Playwright E2E tests
│   ├── fixtures/api.ts                  # Helper to mock API routes in browser
│   ├── accessibility.spec.ts
│   ├── game.spec.ts
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   └── standings.spec.ts
│
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── CHANGELOG.md
│   ├── COMPONENTS.md
│   ├── STANDARDS.md
│   └── TESTING.md
│
└── mocks/
    └── manchester-united-layout.js      # Untracked design mock (new)
```

---

## 2. Existing Components

### 2.1 Layout (`src/components/layout/`)

| Component | Description                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Header`  | Fixed top bar with MU red background (`#DA291C`), hamburger toggle for mobile sidebar, MU Dashboard logo, season label. Uses `useUIStore.toggleSidebar`. |
| `Sidebar` | Collapsible left nav (mobile: drawer with overlay; desktop: static). 4 nav items: Home, Scores, Standings, Search. Uses `useUIStore.sidebarOpen`.        |

### 2.2 Feature Components (`src/components/features/`)

| Component        | Description                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ScoreBoard`     | Fetches matches via `useScores`, renders a responsive grid of `ScoreCard`s with loading/error/empty states. Accepts `ScoresParams` and `onMatchClick` callback.   |
| `LiveScore`      | Thin wrapper around `ScoreBoard` with `status: 'live'` pre-applied.                                                                                               |
| `StandingsTable` | Fetches standings via `useStandings`, renders a full HTML table with position, team, P/W/D/L/GD/Pts/Form columns. Supports `highlightTeamId` for MU row emphasis. |
| `GameStatsPanel` | Fetches match stats via `useMatchStats`, renders head-to-head stat bars (possession, shots, cards, passes, etc.) as proportional progress bars.                   |

> **leagues feature:** directory exists with only an `index.ts` barrel — no component implemented yet.

### 2.3 UI Primitives (`src/components/ui/`)

#### Buttons

| Component     | Description                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Button`      | CVA-powered button. Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`, `success`. Sizes: `sm`, `md`, `lg`. Supports `loading`, `leftIcon`, `rightIcon`, `fullWidth`. |
| `ButtonGroup` | Groups multiple Buttons into a visually joined unit.                                                                                                                              |
| `IconButton`  | Square button optimized for icon-only usage, same CVA variants.                                                                                                                   |

#### Cards

| Component    | Description                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `Card`       | Base container. CVA variants: `default`, `elevated`, `outlined`, `interactive`. Padding tokens: `none`, `sm`, `md`, `lg`. |
| `CardHeader` | Slot component with title, subtitle, and optional action area.                                                            |
| `CardBody`   | Content slot wrapper.                                                                                                     |
| `CardFooter` | Footer slot with optional divider.                                                                                        |
| `StatsCard`  | KPI display: label, large value, sub-value, trend indicator (up/down/neutral with arrow), icon, description.              |
| `ScoreCard`  | Match card: home vs away teams, score, status badge (LIVE/FT/Upcoming/PPD), game time.                                    |
| `TeamCard`   | Team display: logo/initials, name, league, record, position, points.                                                      |
| `LeagueCard` | League display: logo/initials, name, country, season, team count.                                                         |

#### Feedback

| Component       | Description                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| `Badge`         | Pill label. CVA variants: `default`, `primary`, `success`, `warning`, `danger`, `info`. Sizes: `sm`, `md`, `lg`.  |
| `Chip`          | Removable/selectable chip for filter UI.                                                                          |
| `EmptyState`    | Zero-data view with title, optional description and action slot.                                                  |
| `ErrorBoundary` | React class component that catches render errors and shows fallback UI.                                           |
| `Skeleton`      | Animated pulse placeholder. Variants: `text`, `heading`, `circle`, `rectangle`, `card`. Accepts `width`/`height`. |
| `Spinner`       | SVG spinning loader. Sizes: `xs`, `sm`, `md`, `lg`, `xl`.                                                         |
| `Toast`         | Notification component (success/error/info/warning flavors).                                                      |

#### Inputs

| Component     | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| `DatePicker`  | Styled native `<input type="date">` with label and error support. |
| `SearchInput` | Text input with embedded search icon, clear button.               |
| `SelectInput` | Styled native `<select>` with label, placeholder, error message.  |
| `TextInput`   | Styled text input with label, prefix/suffix icons, error.         |
| `Toggle`      | Boolean on/off switch.                                            |

#### Layout Utilities

| Component   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `Container` | Max-width centered page wrapper with responsive padding. |
| `Divider`   | Horizontal or vertical `<hr>`-equivalent.                |
| `Flex`      | Flexbox utility with gap, align, justify props.          |
| `Grid`      | CSS grid utility with cols, gap props.                   |
| `Spacer`    | Flexible whitespace (flex-grow or fixed size).           |
| `Stack`     | Vertical or horizontal spacing stack.                    |

---

## 3. Custom Hooks

### Sports Data Hooks (`src/hooks/sports/`)

| Hook                     | Description                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `useScores(params?)`     | React Query: `GET /sports/scores`. Query key: `['scores', params]`. Global staleTime (30s).                     |
| `useStandings(params)`   | React Query: `GET /sports/standings`. Query key: `['standings', leagueId, season]`. Disabled if params missing. |
| `useMatchStats(matchId)` | React Query: `GET /sports/stats/:matchId`. Query key: `['stats', matchId]`. Disabled if `matchId <= 0`.         |
| `useLeagues()`           | React Query: `GET /sports/leagues`. Query key: `['leagues']`. Custom staleTime: 10 min.                         |

### Utility Hooks (`src/hooks/`)

| Hook                               | Description                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| `useDebounce(value, delay)`        | Returns a debounced copy of `value` after `delay` ms.                           |
| `useDebouncedCallback(fn, delay)`  | Returns a debounced version of a callback.                                      |
| `useLocalStorage(key, initial)`    | Persists state in `localStorage`, syncs across tabs.                            |
| `useMediaQuery(query)`             | Returns `true` when the CSS media query matches.                                |
| `useToggle(initial?)`              | Returns `[value, toggle, setTrue, setFalse]`.                                   |
| `useOutsideClick(ref, handler)`    | Fires `handler` on pointer events outside the provided ref.                     |
| `usePagination(opts)`              | Manages `page`, `pageSize`, `totalPages`, navigation helpers.                   |
| `useInfiniteScroll(ref, callback)` | IntersectionObserver fires `callback` when sentinel element enters viewport.    |
| `useCountdown(targetDate)`         | Returns `{ days, hours, minutes, seconds, isExpired }` counting down to a date. |
| `useCopyToClipboard()`             | Returns `[copied, copyToClipboard]`; `copied` resets after 2s.                  |

---

## 4. Services / API

### API Client (`src/services/api/`)

- **Base URL:** `VITE_API_BASE_URL` env var, defaults to `/api`
- **Timeout:** `VITE_API_TIMEOUT` env var, defaults to `15000` ms
- **Auth:** `X-API-Key` header injected from `VITE_API_KEY` when set
- **Error Handling:** Response interceptor normalizes all errors to `ApiError { status, message, code }`

### Sports Service (`src/services/sports/sportsService.ts`)

| Function                 | Method | Endpoint                 | Params                          |
| ------------------------ | ------ | ------------------------ | ------------------------------- |
| `getScores(params?)`     | GET    | `/sports/scores`         | `leagueId?`, `date?`, `status?` |
| `getStandings(params)`   | GET    | `/sports/standings`      | `leagueId`, `season`            |
| `getMatchStats(matchId)` | GET    | `/sports/stats/:matchId` | path param                      |
| `getLeagues()`           | GET    | `/sports/leagues`        | none                            |

### API Types

```ts
ApiResponse<T> // { data: T; status: number; message? }
PaginatedResponse<T> // { data: T[]; total; page; pageSize; totalPages }
ApiError // { status; message; code? }
```

---

## 5. Zustand Stores

| Store             | State                                                                                                          | Actions                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `useFiltersStore` | `selectedLeagueId` (default: 39/PL), `selectedSeason` (default: `'2023/24'`), `selectedStatus`, `selectedDate` | `setLeague`, `setSeason`, `setStatus`, `setDate`, `resetFilters` |
| `useUIStore`      | `sidebarOpen` (false), `theme` (`'light'`)                                                                     | `toggleSidebar`, `setSidebarOpen`, `setTheme`                    |

**Note:** `useFiltersStore` uses `zustand/middleware/persist` (localStorage key: `'sports-filters'`). `useUIStore` is in-memory only. `src/store/index.ts` is an empty legacy placeholder — unused.

---

## 6. TypeScript Interfaces / Types

### Domain Types (`src/services/sports/types.ts`)

| Type              | Fields                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `MatchStatus`     | `'scheduled' \| 'live' \| 'finished' \| 'postponed' \| 'cancelled'`                                                         |
| `Team`            | `id`, `name`, `shortName`, `logo?`, `primaryColor?`                                                                         |
| `League`          | `id`, `name`, `country`, `season`, `logo?`, `teamCount?`                                                                    |
| `Match`           | `id`, `homeTeam`, `awayTeam`, `homeScore?`, `awayScore?`, `status`, `minute?`, `date`, `league`                             |
| `Standing`        | `position`, `team`, `played`, `won`, `drawn`, `lost`, `goalsFor`, `goalsAgainst`, `goalDifference`, `points`, `form?`       |
| `GameStats`       | `matchId`, `home: TeamGameStats`, `away: TeamGameStats`                                                                     |
| `TeamGameStats`   | `possession`, `shots`, `shotsOnTarget`, `corners`, `fouls`, `yellowCards`, `redCards`, `offsides`, `passes`, `passAccuracy` |
| `ScoresParams`    | `leagueId?`, `date?`, `status?`                                                                                             |
| `StandingsParams` | `leagueId`, `season`                                                                                                        |

### API Types (`src/services/api/types.ts`)

| Type                   | Fields                                                 |
| ---------------------- | ------------------------------------------------------ |
| `ApiResponse<T>`       | `data: T`, `status: number`, `message?`                |
| `PaginatedResponse<T>` | `data: T[]`, `total`, `page`, `pageSize`, `totalPages` |
| `ApiError`             | `status`, `message`, `code?`                           |
| `SortOrder`            | `'asc' \| 'desc'`                                      |
| `PaginationParams`     | `page?`, `pageSize?`                                   |

### Placeholder Types

- `src/types/index.ts` — **empty** (`export {}`). Global dashboard types not yet defined.
- `src/constants/index.ts` — **empty**. No app-wide constants defined.
- `src/context/index.ts` — **empty**. No React contexts defined.

---

## 7. Key Dependencies

### Runtime

| Package                    | Version | Purpose                                |
| -------------------------- | ------- | -------------------------------------- |
| `react`                    | ^18.3.1 | UI framework                           |
| `react-dom`                | ^18.3.1 | DOM renderer                           |
| `react-router-dom`         | ^7.13.2 | Client-side routing                    |
| `@tanstack/react-query`    | ^5.95.2 | Server-state management + caching      |
| `zustand`                  | ^5.0.12 | Client-state management                |
| `axios`                    | ^1.13.6 | HTTP client                            |
| `class-variance-authority` | ^0.7.1  | CVA variant system for components      |
| `clsx`                     | ^2.1.1  | Conditional className utility          |
| `tailwind-merge`           | ^3.5.0  | Tailwind conflict resolution in `cn()` |

### Dev / Tooling

| Package                  | Version  | Purpose                         |
| ------------------------ | -------- | ------------------------------- |
| `vite`                   | ^5.4.10  | Build tool / dev server         |
| `typescript`             | ~5.6.2   | Type safety                     |
| `tailwindcss`            | ^3.4.19  | Utility-first CSS               |
| `vitest`                 | ^1.6.1   | Unit/component test runner      |
| `@testing-library/react` | ^14.3.1  | Component testing utilities     |
| `msw`                    | ^2.12.14 | API mocking (MSW v2)            |
| `@playwright/test`       | ^1.58.2  | E2E test framework              |
| `storybook`              | ^8.6.18  | Component development/docs      |
| `husky` + `lint-staged`  | ^9/^15   | Pre-commit hooks                |
| `@commitlint/cli`        | ^18      | Conventional commit enforcement |
| `eslint` + `prettier`    | ^9/^3    | Linting + formatting            |

**Notable absences for the redesign:**

- No charting library (Recharts, Chart.js, D3) — needed for `GoalsLineChart` and `ResultsDonutChart`
- No animation library (Framer Motion) — may be needed for `FixturesTimeline`
- No date library (date-fns, dayjs) — currently using native `Intl` in `format.ts`

---

## 8. Components to Refactor for Redesign

The redesign requires: `StatsCard`, `MatchCard`, `LeagueTable`, `GoalsLineChart`, `ResultsDonutChart`, `PlayerCard`, `PlayerComparison`, `FixturesTimeline`, `Header`, `Sidebar`, `Filter system`, `LiveIndicator`.

### Components That Exist and Need Refactoring

| Redesign Component | Current Equivalent                                      | Gap / Conflict                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `StatsCard`        | `ui/cards/StatsCard`                                    | Exists and functional. Needs MU brand theming (red/black palette, custom typography). Icon slot exists but uses generic colors.                                                                                                    |
| `MatchCard`        | `ui/cards/ScoreCard`                                    | Rename to `MatchCard` or extend. Missing: fixture date/time display for upcoming matches, venue field, MU-specific styling. Status mapping from `MatchStatus` to `GameStatus` is an extra translation step that should be unified. |
| `LeagueTable`      | `features/standings/StandingsTable`                     | Rename/wrap as `LeagueTable`. Currently hardcodes HTML table — needs to support MU row highlight by design token (not just `bg-red-50`). Missing: scrollable sticky header, GF/GA columns hidden on mobile.                        |
| `Header`           | `layout/Header`                                         | Exists. Needs redesign: add live score ticker strip, season selector dropdown, notification bell, user avatar. Currently static season label `'2023/24'` is hardcoded string, not from store.                                      |
| `Sidebar`          | `layout/Sidebar`                                        | Exists. Needs redesign: active route highlighting (uses plain `<a>` tags, not `NavLink`), MU crest branding, new nav items (Players, Stats, Fixtures). Currently uses emoji icons — needs SVG icon set.                            |
| `Filter system`    | `useFiltersStore` (store only)                          | Store exists but there is **no Filter UI component**. Needs: `FilterBar` or `FilterPanel` component wiring `SelectInput`/`DatePicker`/`ButtonGroup` to the store.                                                                  |
| `LiveIndicator`    | `Badge` (danger variant + animate-pulse on `ScoreCard`) | No dedicated `LiveIndicator` component. Currently `ScoreCard` inlines the LIVE badge. Extract as standalone with pulsing dot + label.                                                                                              |

### Components to Create from Scratch

| Redesign Component  | Status      | Notes                                                                                                                                                                                  |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GoalsLineChart`    | **Missing** | No chart component exists. Requires a charting library (Recharts recommended — compatible with React 18, tree-shakeable). Should show goals scored/conceded per match over the season. |
| `ResultsDonutChart` | **Missing** | No chart component exists. Win/Draw/Loss distribution donut. Needs same charting library as above.                                                                                     |
| `PlayerCard`        | **Missing** | No player domain type or component. Needs new API endpoint, `Player` type, and card component.                                                                                         |
| `PlayerComparison`  | **Missing** | No comparison component. Depends on `PlayerCard` being built first. Complex side-by-side stat layout.                                                                                  |
| `FixturesTimeline`  | **Missing** | No timeline/calendar component. Needs `Match[]` with `status: 'scheduled'` and a timeline/card strip layout. `useCountdown` hook exists and can power match countdown badges.          |

---

## 9. Test Coverage Status

### Unit / Component Tests (Vitest + Testing Library)

| File                                                | What Is Tested                                                                    |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `ScoreBoard.test.tsx`                               | Loading state, error state, empty state, renders matches                          |
| `StandingsTable.test.tsx`                           | Loading state, error state, empty state, renders rows, highlights MU              |
| `GameStatsPanel.test.tsx`                           | Loading state, error/missing stats, renders stat bars                             |
| `Button.test.tsx`                                   | All variants, sizes, loading state, disabled, leftIcon/rightIcon                  |
| `ButtonGroup.test.tsx`                              | Renders children, applies group styling                                           |
| `IconButton.test.tsx`                               | Renders, accessible label                                                         |
| `Card.test.tsx`                                     | Variants, padding, hoverable                                                      |
| `CardBody/CardHeader/CardFooter.test.tsx`           | Slot rendering                                                                    |
| `StatsCard.test.tsx`                                | Value, trend, icon, description render                                            |
| `ScoreCard.test.tsx`                                | Teams, scores, status badge, onClick                                              |
| `TeamCard.test.tsx`                                 | Logo, fallback initials, position, points                                         |
| `LeagueCard.test.tsx`                               | Name, country, season, teamCount                                                  |
| `Badge.test.tsx`                                    | All variants, sizes                                                               |
| `Chip.test.tsx`                                     | Renders, onRemove                                                                 |
| `EmptyState.test.tsx`                               | Title, description                                                                |
| `ErrorBoundary.test.tsx`                            | Catches render errors, shows fallback                                             |
| `Skeleton.test.tsx`                                 | Variants, custom dimensions                                                       |
| `Spinner.test.tsx`                                  | Sizes, aria-hidden                                                                |
| `Toast.test.tsx`                                    | Variants, dismiss                                                                 |
| `DatePicker.test.tsx`                               | Label, value, error                                                               |
| `SearchInput.test.tsx`                              | Input, clear button                                                               |
| `SelectInput.test.tsx`                              | Options, placeholder, error                                                       |
| `TextInput.test.tsx`                                | Label, prefix/suffix, error                                                       |
| `Toggle.test.tsx`                                   | On/off, onChange                                                                  |
| `Container/Flex/Grid/Stack/Divider/Spacer.test.tsx` | Layout utility rendering                                                          |
| `useLeagues.test.tsx`                               | Fetches leagues, handles error                                                    |
| `useMatchStats.test.tsx`                            | Fetches stats, disabled when matchId=0                                            |
| `useScores.test.tsx`                                | Fetches scores, passes params                                                     |
| `useStandings.test.tsx`                             | Fetches standings, disabled when params missing                                   |
| `useFiltersStore.test.ts`                           | Initial state, setters, resetFilters                                              |
| `useUIStore.test.ts`                                | toggleSidebar, setSidebarOpen, setTheme                                           |
| `useCopyToClipboard.test.ts`                        | Copies, resets after timeout                                                      |
| `useCountdown.test.ts`                              | Counts down, isExpired                                                            |
| `useDebounce.test.ts`                               | Delays value update                                                               |
| `useDebouncedCallback.test.ts`                      | Delays callback                                                                   |
| `useInfiniteScroll.test.ts`                         | Observer fires on intersection                                                    |
| `useLocalStorage.test.ts`                           | Reads/writes localStorage                                                         |
| `useMediaQuery.test.ts`                             | Query match/no-match                                                              |
| `useOutsideClick.test.ts`                           | Fires on outside click, not on inside                                             |
| `usePagination.test.ts`                             | Page navigation, totalPages                                                       |
| `useToggle.test.ts`                                 | Toggle, setTrue, setFalse                                                         |
| `sportsService.test.ts`                             | All 4 service functions via MSW                                                   |
| `format.test.ts`                                    | formatDate (all modes), formatScore, formatStanding, formatDuration, formatNumber |

### E2E Tests (Playwright — 5 spec files, 23 tests)

| Spec                    | Tests                                                                  |
| ----------------------- | ---------------------------------------------------------------------- |
| `home.spec.ts`          | Header visible, score board loads, LIVE badge, click navigates to game |
| `standings.spec.ts`     | Standings page title, table renders, MU row highlighted                |
| `game.spec.ts`          | Game page title, stat bars render, back button works                   |
| `navigation.spec.ts`    | Sidebar nav links, mobile hamburger, route changes                     |
| `accessibility.spec.ts` | ARIA roles, keyboard navigation, focus management                      |

### Coverage Gaps

- **Pages** (Home, Standings, Game, Search, League, NotFound): no unit tests — only covered by E2E.
- **Search page:** `debouncedQuery`-gated results not tested in isolation.
- **AppRouter:** not unit-tested (only implicitly via E2E navigation).
- **New redesign components** (GoalsLineChart, ResultsDonutChart, PlayerCard, PlayerComparison, FixturesTimeline, FilterBar, LiveIndicator): no tests exist yet.
- **`src/types/index.ts`** and **`src/constants/index.ts`**: empty — no tests needed yet, but watch for when they gain content.

---

## 10. Gaps & Issues

### Critical Gaps for Redesign

1. **No chart library installed.** `GoalsLineChart` and `ResultsDonutChart` are fully blocked. Install Recharts (`recharts@^2`) or visx as first step.

2. **No Player domain.** Neither `Player` type, player API endpoint, nor any player-related hook or component exists. This blocks `PlayerCard` and `PlayerComparison`.

3. **No Filter UI component.** `useFiltersStore` is wired up in pages but the filter controls are not exposed to users — pages read from the store but never render controls to change it. A `FilterBar` component is required.

4. **No `LiveIndicator` component.** The LIVE badge is embedded inside `ScoreCard`. Needs extraction for reuse in Header ticker and FixturesTimeline.

5. **No `FixturesTimeline` component.** No timeline layout exists. The `useCountdown` hook is available for countdown badges but the parent component and data shape need to be built.

6. **`Sidebar` uses plain `<a>` tags.** Not React Router `NavLink`s — active route highlighting is absent. This will break navigation behavior assumptions in the redesign.

7. **`Header` season label is hardcoded.** The string `'2023/24 Season'` is hardcoded in JSX rather than read from `useFiltersStore.selectedSeason`. The two are out of sync when the filter store changes.

8. **`leagues` feature directory is empty.** Only an `index.ts` barrel, no `LeagueList` or `LeagueSelector` component.

9. **`src/store/index.ts` is an empty legacy stub** alongside `src/stores/`. The plural `stores/` is the active directory. The singular `store/` should be removed to avoid confusion.

10. **`src/types/index.ts`, `src/context/index.ts`, `src/constants/index.ts` are all empty.** Global type definitions, React contexts, and app constants need to be populated as the redesign adds complexity.

### Minor Issues

- `ScoreCard` maps `MatchStatus` to a local `GameStatus` type in `ScoreBoard`. This double-type mapping is fragile — the two type unions should be unified in the service layer.
- `StandingsTable` uses index (`key={i}`) for `FormBadge` items — should use a stable key like `${standing.team.id}-${i}`.
- `useTheme` is stored in `useUIStore` but never applied — no `className` on `<html>` or provider that reads the theme value. Dark mode is non-functional.
- The `Search` page passes no query param to `ScoreBoard` — `debouncedQuery` is computed but never forwarded to the API call, so search results are not actually filtered.
- `context/index.ts` is empty — if `ErrorBoundary` or theme toggling needs a React context, this needs to be populated.
