import type { Page } from '@playwright/test'

const scores = [
  {
    id: 1,
    homeTeam: { id: 33, name: 'Manchester United', shortName: 'MUN', primaryColor: '#DA291C' },
    awayTeam: { id: 49, name: 'Chelsea', shortName: 'CHE', primaryColor: '#034694' },
    homeScore: 2,
    awayScore: 1,
    status: 'finished',
    date: '2024-03-15T15:00:00Z',
    league: { id: 39, name: 'Premier League', country: 'England', season: '2023/24' },
  },
  {
    id: 3,
    homeTeam: { id: 33, name: 'Manchester United', shortName: 'MUN', primaryColor: '#DA291C' },
    awayTeam: { id: 50, name: 'Manchester City', shortName: 'MCI', primaryColor: '#6CABDD' },
    homeScore: 1,
    awayScore: 1,
    status: 'live',
    minute: 67,
    date: '2024-03-18T19:45:00Z',
    league: { id: 39, name: 'Premier League', country: 'England', season: '2023/24' },
  },
]

const standings = [
  {
    position: 1,
    team: { id: 50, name: 'Manchester City', shortName: 'MCI', primaryColor: '#6CABDD' },
    played: 28,
    won: 20,
    drawn: 4,
    lost: 4,
    goalsFor: 62,
    goalsAgainst: 28,
    goalDifference: 34,
    points: 64,
    form: ['W', 'W', 'D', 'W', 'W'],
  },
  {
    position: 6,
    team: { id: 33, name: 'Manchester United', shortName: 'MUN', primaryColor: '#DA291C' },
    played: 28,
    won: 12,
    drawn: 4,
    lost: 12,
    goalsFor: 29,
    goalsAgainst: 43,
    goalDifference: -14,
    points: 40,
    form: ['L', 'W', 'D', 'L', 'W'],
  },
]

const stats = {
  matchId: 1,
  home: {
    possession: 55,
    shots: 14,
    shotsOnTarget: 6,
    corners: 7,
    fouls: 11,
    yellowCards: 1,
    redCards: 0,
    offsides: 2,
    passes: 512,
    passAccuracy: 87,
  },
  away: {
    possession: 45,
    shots: 9,
    shotsOnTarget: 3,
    corners: 4,
    fouls: 14,
    yellowCards: 2,
    redCards: 0,
    offsides: 3,
    passes: 418,
    passAccuracy: 82,
  },
}

const leagues = [
  { id: 39, name: 'Premier League', country: 'England', season: '2023/24', teamCount: 20 },
]

/** Register API mocks for all sports endpoints */
export async function mockApi(page: Page) {
  await page.route('**/api/sports/scores**', (route) =>
    route.fulfill({ json: { data: scores, status: 200 } })
  )
  await page.route('**/api/sports/standings**', (route) =>
    route.fulfill({ json: { data: standings, status: 200 } })
  )
  // wildcard registered first so it's lower priority (Playwright LIFO)
  await page.route('**/api/sports/stats/**', (route) =>
    route.fulfill({ status: 404, json: { status: 404, message: 'Match not found' } })
  )
  await page.route('**/api/sports/stats/1', (route) =>
    route.fulfill({ json: { data: stats, status: 200 } })
  )
  await page.route('**/api/sports/leagues**', (route) =>
    route.fulfill({ json: { data: leagues, total: 1, page: 1, pageSize: 10, totalPages: 1 } })
  )
  await page.route('**/api/health**', (route) => route.fulfill({ json: { status: 'ok' } }))
}
