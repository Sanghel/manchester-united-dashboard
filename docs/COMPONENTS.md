# Components

All components follow these conventions:

- TypeScript strict mode, `forwardRef` where refs are needed
- CVA (class-variance-authority) for variant styles
- ARIA roles and labels for accessibility
- Storybook story (autodocs)
- Vitest + React Testing Library tests

## Design system (`src/components/ui/`)

### Buttons

| Component     | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Button`      | Primary action button. Variants: `default`, `primary`, `secondary`, `danger`, `ghost`, `link`. Sizes: `xs`–`xl`. |
| `IconButton`  | Square button with icon, accessible `aria-label`.                                                                |
| `ButtonGroup` | Horizontal group of related buttons.                                                                             |

### Cards

| Component    | Description                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `Card`       | Base card shell. Variants: `default`, `interactive`, `outlined`, `elevated`.                                      |
| `CardHeader` | Card title + optional subtitle.                                                                                   |
| `CardBody`   | Card content area with padding.                                                                                   |
| `CardFooter` | Card action area.                                                                                                 |
| `ScoreCard`  | Match score with team names, status badge (`live`/`finished`/`upcoming`/`postponed`), and optional click handler. |
| `StatsCard`  | Metric with trend indicator (up/down/neutral), icon, and optional description.                                    |
| `TeamCard`   | Team info with position, points, record, and logo.                                                                |
| `LeagueCard` | League info with country, season, team count.                                                                     |

### Feedback

| Component       | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `Spinner`       | Loading indicator. Sizes: `xs`–`xl`. Colors: `default`, `primary`, `white`.          |
| `Skeleton`      | Animated placeholder. Variants: `text`, `heading`, `circle`, `rectangle`, `card`.    |
| `Badge`         | Status chip. Variants: `default`, `primary`, `success`, `warning`, `danger`, `info`. |
| `Chip`          | Filter tag with optional remove button and selected state.                           |
| `Toast`         | Contextual notification via `useToast()` hook. Auto-dismiss. `role="alert"`.         |
| `ErrorBoundary` | Class component catching render errors. Accepts ReactNode or function fallback.      |
| `EmptyState`    | Zero-state placeholder with title, description, optional icon and action.            |

### Inputs

| Component     | Description                                      |
| ------------- | ------------------------------------------------ |
| `TextInput`   | Text field with label, helper text, error state. |
| `SearchInput` | Text field with search icon and clear button.    |
| `SelectInput` | Native `<select>` with label and error state.    |
| `Toggle`      | Accessible on/off switch.                        |
| `DatePicker`  | Native date input with label.                    |

### Layout

| Component   | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `Container` | Max-width wrapper. Sizes: `sm`–`2xl`, `full`.                 |
| `Grid`      | CSS grid with configurable columns (1–12) and gaps.           |
| `Flex`      | Flexbox wrapper with direction, align, justify, gap variants. |
| `Stack`     | Vertical or horizontal stack with configurable spacing.       |
| `Divider`   | Horizontal rule, vertical rule, or labeled divider.           |
| `Spacer`    | Flexible space filler.                                        |

## Feature components (`src/components/features/`)

| Component        | Hook             | Description                                                             |
| ---------------- | ---------------- | ----------------------------------------------------------------------- |
| `ScoreBoard`     | `useScores`      | Responsive grid of `ScoreCard` items. Shows spinner/empty/error states. |
| `LiveScore`      | via `ScoreBoard` | `ScoreBoard` pre-filtered to `status='live'`.                           |
| `StandingsTable` | `useStandings`   | League table with form badges. Highlights a specified team.             |
| `GameStatsPanel` | `useMatchStats`  | Dual-bar possession/shots/passes display.                               |

## Layout components (`src/components/layout/`)

| Component | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| `Header`  | Fixed top bar with MU branding and hamburger toggle (mobile).               |
| `Sidebar` | Navigation links. Slides in from left on mobile; always visible on desktop. |
