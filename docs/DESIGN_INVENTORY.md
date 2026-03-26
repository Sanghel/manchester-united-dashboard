# Design Inventory — Manchester United Dashboard Redesign

> Source: `mocks/manchester-united-layout.js` (Pencil MCP)
> Canvas: 1920×1080 | Theme: Dark / Manchester United brand
> Generated: 2026-03-25

---

## Design Tokens

All tokens are defined as CSS variables in the Pencil file and must be mapped to Tailwind config.

| Token               | Value     | Usage                                              |
| ------------------- | --------- | -------------------------------------------------- |
| `$mu-red-primary`   | `#DA291C` | Header bg, active nav, stat numbers, row highlight |
| `$mu-red-secondary` | `#C1232B` | Season badge bg                                    |
| `$mu-gold`          | `#FFB81C` | Icons, logo box, badges, key stats                 |
| `$bg-dark`          | `#1A1A1A` | Main content area background                       |
| `$bg-card`          | `#2A2A2A` | Card backgrounds, table cells                      |
| `$bg-sidebar`       | `#0E1117` | Sidebar background                                 |
| `$text-primary`     | `#FFFFFF` | Primary text, key numbers                          |
| `$text-secondary`   | `#B0B0B0` | Labels, dates, table headers                       |
| `$success-green`    | `#10B981` | WIN badge, win percentage, trend positive          |
| `$warning-orange`   | `#F59E0B` | DRAW badge                                         |
| `$error-red`        | `#EF4444` | LOSS badge                                         |

---

## Layout Structure

```
Frame (1920×1080) — white outer shell
├── Header (1920×70) — $mu-red-primary
│   ├── headerLeft — logo box (40×40 $mu-gold) + "Manchester United Dashboard" (Inter, 20px, bold)
│   ├── headerCenter — seasonBadge ("2023/24 Season", $mu-red-secondary bg, 14px bold)
│   └── headerRight — notificationDot (8×8 $mu-gold) + userBox (40×40 $bg-card)
└── mainContainer (1920×900) — horizontal layout
    ├── Sidebar (280px) — $bg-sidebar
    │   ├── navHome (active: $bg-card) — house icon + "Home"
    │   ├── navScores — activity icon + "Scores"
    │   ├── navStandings — trophy icon + "Standings"
    │   ├── navPlayers — users icon + "Players"
    │   ├── navStats — bar-chart-2 icon + "Statistics"
    │   ├── [divider]
    │   └── navSettings — settings icon + "Settings"
    └── Content Area (fill) — $bg-dark, vertical layout
        ├── Stats Overview Cards
        ├── Latest Scores Section
        ├── League Table Section
        ├── Performance Charts
        ├── Top Players Section
        └── Upcoming Fixtures
```

---

## Components Inventory

### 1. Header

**Node:** `cICNL` (1920×70)

| Sub-component    | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| Logo box         | 40×40 rounded rectangle, `$mu-gold` fill                            |
| Title            | "Manchester United Dashboard", Inter 20px bold, `$text-primary`     |
| Season badge     | "2023/24 Season", `$mu-red-secondary` bg, 8/16px padding, 14px bold |
| Notification dot | 8×8 ellipse, `$mu-gold` fill                                        |
| User box         | 40×40 rectangle, `$bg-card` fill                                    |

**React component:** `src/components/layout/Header/Header.tsx`

---

### 2. Sidebar Navigation

**Node:** `paejb` (280px)

| Item         | Icon (Lucide) | Label      | State                                          |
| ------------ | ------------- | ---------- | ---------------------------------------------- |
| navHome      | `house`       | Home       | Active (`$bg-card` bg, `$mu-red-primary` icon) |
| navScores    | `activity`    | Scores     | Default                                        |
| navStandings | `trophy`      | Standings  | Default                                        |
| navPlayers   | `users`       | Players    | Default                                        |
| navStats     | `bar-chart-2` | Statistics | Default                                        |
| navSettings  | `settings`    | Settings   | Default                                        |

**React components:**

- `src/components/layout/Sidebar/Sidebar.tsx`
- `src/components/layout/Sidebar/NavItem.tsx`

---

### 3. Stats Overview Cards

**Node:** `Ksn47` — Section title: "Performance Overview"
**Layout:** 4-column horizontal grid (`statsGrid`)

| Card  | Icon       | Label             | Value | Color                             |
| ----- | ---------- | ----------------- | ----- | --------------------------------- |
| card1 | `calendar` | Total Matches     | 38    | `$mu-red-primary`                 |
| card2 | `target`   | Goals This Season | 87    | `$mu-gold`                        |
| card3 | `trophy`   | Win Percentage    | 68%   | `$success-green` + progress bar   |
| card4 | `award`    | League Position   | 3rd   | `$mu-red-primary` + "Top 4" badge |

**Anatomy per card:**

- `$bg-card` background, rounded corners
- Icon (20×20, `$mu-gold`)
- Label (`$text-secondary`, small)
- Number (large, bold, color varies)
- Trend indicator: dot (6×6 ellipse) + text (e.g., "+5 vs last month")
- card3 has a progress bar (`card3Progress`, 8px h, `$bg-dark` fill)
- card4 has a badge (`card4Badge`, `$mu-gold` bg, "Top 4" in `$bg-dark`)

**React components:**

- `src/components/dashboard/StatsCard/StatsCard.tsx`
- `src/components/dashboard/StatsCard/TrendIndicator.tsx`
- `src/components/dashboard/StatsOverview/StatsOverview.tsx`

---

### 4. Match Cards

**Node:** `5Q9YP` — Section title: "Latest Scores"
**Layout:** 3-column grid (`scoresGrid`)

| Match  | Date   | Competition      | Result                   | Score                   |
| ------ | ------ | ---------------- | ------------------------ | ----------------------- |
| match1 | Mar 22 | Premier League   | WIN (`$success-green`)   | MAN UTD 2 - 1 Newcastle |
| match2 | Mar 20 | FA Cup           | DRAW (`$warning-orange`) | Brighton 1 - 1 MAN UTD  |
| match3 | Mar 15 | Champions League | LOSS (`$error-red`)      | Barcelona 3 - 2 MAN UTD |

**Anatomy per card:**

- Header row: date + competition | result badge
- Teams + Score row: team names + large score ("X - X", `$text-primary`, bold)
- Stats row: "Possession XX%" | "Shots XX" (`$text-secondary`)

**React components:**

- `src/components/matches/MatchCard/MatchCard.tsx`
- `src/components/matches/MatchCard/StatusBadge.tsx`
- `src/components/matches/MatchesList/MatchesList.tsx`

---

### 5. League Table

**Node:** `Cvn6Z` → container `qbXpV` (`$bg-card`)

**Columns:** Pos | Team (with logo 32×32 + name) | P | W | D | L | GD | Pts

**Rows visible (5):**
| Pos | Team | P | W | D | L | GD | Pts | Highlight |
|---|---|---|---|---|---|---|---|---|
| 1 | Arsenal | 28 | 21 | 4 | 3 | +38 | 67 | — |
| 2 | Liverpool / Man City | 28 | 20 | 3 | 5 | +25 | 63 | — |
| **3** | **Man United** | **27** | **19** | **5** | **3** | **+28** | **62** | `$mu-red-primary` row bg |
| 4 | Chelsea / Arsenal | 27 | 17 | 4 | 6 | +20 | — | — |
| 5 | ... | ... | ... | ... | ... | ... | ... | — |

**React components:**

- `src/components/standings/LeagueTable/LeagueTable.tsx`
- `src/components/standings/LeagueTable/TableRow.tsx`
- `src/components/standings/LeagueTable/TableHeader.tsx`

---

### 6. Performance Charts

**Node:** `chartsContainer` — 2-column layout

**Chart 1 — Goals Line Chart** (`lineChartCard`):

- Line chart (area-style)
- X-axis: months/game weeks
- Y-axis: goal count
- Stroke color: `$mu-red-primary`

**Chart 2 — Results Donut Chart** (`donutChartCard`):

- Donut chart with `donutVisual` (ellipse, hollow)
- 3-segment legend:
  - Wins (`$success-green`)
  - Draws (`$warning-orange`)
  - Losses (`$error-red`)

**React components:**

- `src/components/charts/GoalsLineChart/GoalsLineChart.tsx`
- `src/components/charts/ResultsDonutChart/ResultsDonutChart.tsx`
- `src/components/charts/ChartContainer/ChartContainer.tsx`

---

### 7. Player Cards

**Node:** `Top Players Section`
**Layout:** 4-column grid

| Card        | Avatar                    | Label                     |
| ----------- | ------------------------- | ------------------------- |
| player1Card | `player1Avatar` (ellipse) | Name + Position + 3 stats |
| player2Card | `player2Avatar` (ellipse) | Name + Position + 3 stats |
| player3Card | `player3Avatar` (ellipse) | Name + Position + 3 stats |
| player4Card | `player4Avatar` (ellipse) | Name + Position + 3 stats |

**Anatomy per card:**

- Circular avatar (ellipse)
- Name (`$text-primary`)
- Position badge (`player#Position` frame)
- 3 stats (`player#Stat1/2/3`) — icon + label + value

**React components:**

- `src/components/players/PlayerCard/PlayerCard.tsx`
- `src/components/players/PlayerCard/PlayerPhoto.tsx`
- `src/components/players/PlayerCard/PlayerStats.tsx`
- `src/components/players/PlayerGrid/PlayerGrid.tsx`

---

### 8. Upcoming Fixtures

**Node:** `fixturesContainer`

3 fixtures visible:

| Fixture  | Badge            | Venue                                 |
| -------- | ---------------- | ------------------------------------- |
| fixture1 | `fixture1Badge1` | `fixture1Venue` (HOME/AWAY indicator) |
| fixture2 | `fixture2Badge1` | `fixture2Venue`                       |
| fixture3 | `fixture3Badge1` | `fixture3Venue`                       |

**Anatomy per fixture:**

- Date + competition badge
- Teams row (`fixture#Teams`)
- Venue indicator (`fixture#Venue`) — HOME/AWAY
- Content frame (`fixture#Content`)

**React components:**

- `src/components/fixtures/FixturesTimeline/FixturesTimeline.tsx`
- `src/components/fixtures/FixtureCard/FixtureCard.tsx`
- `src/components/fixtures/VenueIndicator/VenueIndicator.tsx`

---

## Icon System

All icons use **Lucide** icon font (`iconFontFamily: "lucide"`):

| Icon name     | Used in                                           |
| ------------- | ------------------------------------------------- |
| `house`       | Sidebar nav — Home                                |
| `activity`    | Sidebar nav — Scores, Latest Scores section title |
| `trophy`      | Sidebar nav — Standings, Stats card — Win %       |
| `users`       | Sidebar nav — Players                             |
| `bar-chart-2` | Sidebar nav — Statistics                          |
| `settings`    | Sidebar nav — Settings                            |
| `calendar`    | Stats card — Total Matches                        |
| `target`      | Stats card — Goals                                |
| `award`       | Stats card — League Position                      |

---

## Design → Code Component Mapping

| Design Section   | Design Node           | React Component         | Status             |
| ---------------- | --------------------- | ----------------------- | ------------------ |
| Header           | `cICNL`               | `Header.tsx`            | To build           |
| Sidebar          | `paejb`               | `Sidebar.tsx`           | Exists (refactor)  |
| Stats Cards      | `Ksn47`               | `StatsCard.tsx`         | Partial (refactor) |
| Match Cards      | `5Q9YP`               | `MatchCard.tsx`         | To build           |
| League Table     | `Cvn6Z`               | `LeagueTable.tsx`       | Partial (refactor) |
| Goals Line Chart | `lineChartCard`       | `GoalsLineChart.tsx`    | To build           |
| Donut Chart      | `donutChartCard`      | `ResultsDonutChart.tsx` | To build           |
| Player Cards     | `Top Players Section` | `PlayerCard.tsx`        | Partial (refactor) |
| Fixtures         | `fixturesContainer`   | `FixturesTimeline.tsx`  | To build           |

---

## Notes

- Font family: **Inter** throughout
- All colors are dark-mode only — no light mode toggle needed yet
- Team logos are image fills (32×32 rectangles) stored in `mocks/images/`
- The design uses a fixed 1920px canvas width — responsive breakpoints to be defined in code
- Season badge shows "2023/24" — should be dynamic in code
