# API Reference

## Configuration

| Env var             | Description                                 |
| ------------------- | ------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL for all requests (default: `/api`) |
| `VITE_API_KEY`      | Sent as `X-API-Key` header when set         |
| `VITE_API_TIMEOUT`  | Request timeout ms (default: `15000`)       |

## Endpoints

### GET `/sports/scores`

Returns a list of matches.

Query params:

- `leagueId` — filter by league
- `date` — filter by date (ISO 8601)
- `status` — `scheduled | live | finished | postponed | cancelled`

Response: `ApiResponse<Match[]>`

### GET `/sports/standings`

Returns the league table for a given league and season.

Query params:

- `leagueId` _(required)_
- `season` _(required)_ — e.g. `2023/24`

Response: `ApiResponse<Standing[]>`

### GET `/sports/stats/:matchId`

Returns statistics for a single match.

Response: `ApiResponse<GameStats>` or `404` if not found.

### GET `/sports/leagues`

Returns all available leagues.

Response: `PaginatedResponse<League>`

## Types

```ts
interface Match {
  id: number
  homeTeam: Team
  awayTeam: Team
  homeScore?: number
  awayScore?: number
  status: 'scheduled' | 'live' | 'finished' | 'postponed' | 'cancelled'
  minute?: number
  date: string // ISO 8601
  league: League
}

interface Team {
  id: number
  name: string
  shortName: string
  logo?: string
  primaryColor?: string
}

interface League {
  id: number
  name: string
  country: string
  season: string
  logo?: string
  teamCount?: number
}

interface Standing {
  position: number
  team: Team
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  form?: string[] // ['W', 'D', 'L', ...]
}

interface GameStats {
  matchId: number
  home: TeamGameStats
  away: TeamGameStats
}

interface TeamGameStats {
  possession: number
  shots: number
  shotsOnTarget: number
  corners: number
  fouls: number
  yellowCards: number
  redCards: number
  offsides: number
  passes: number
  passAccuracy: number
}
```

## Error shape

All errors from the response interceptor are normalized to:

```ts
interface ApiError {
  status: number // HTTP status code, 0 for network errors
  message: string // Human-readable message
  code?: string // Optional error code from API
}
```

## React Query hooks

| Hook                     | Query key                         | Enabled when             |
| ------------------------ | --------------------------------- | ------------------------ |
| `useScores(params?)`     | `['scores', params]`              | always                   |
| `useStandings(params)`   | `['standings', leagueId, season]` | `leagueId > 0 && season` |
| `useMatchStats(matchId)` | `['stats', matchId]`              | `matchId > 0`            |
| `useLeagues()`           | `['leagues']`                     | always                   |
