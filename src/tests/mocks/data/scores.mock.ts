import type { Match } from '@/services/sports'

export const mockScores: Match[] = [
  {
    id: 1,
    homeTeam: {
      id: 33,
      name: 'Manchester United',
      shortName: 'MUN',
      logo: '/logos/man-utd.png',
      primaryColor: '#DA291C',
    },
    awayTeam: {
      id: 49,
      name: 'Chelsea',
      shortName: 'CHE',
      logo: '/logos/chelsea.png',
      primaryColor: '#034694',
    },
    homeScore: 2,
    awayScore: 1,
    status: 'finished',
    date: '2024-03-15T15:00:00Z',
    league: { id: 39, name: 'Premier League', country: 'England', season: '2023/24' },
  },
  {
    id: 2,
    homeTeam: {
      id: 40,
      name: 'Liverpool',
      shortName: 'LIV',
      logo: '/logos/liverpool.png',
      primaryColor: '#C8102E',
    },
    awayTeam: {
      id: 33,
      name: 'Manchester United',
      shortName: 'MUN',
      logo: '/logos/man-utd.png',
      primaryColor: '#DA291C',
    },
    status: 'scheduled',
    date: '2024-03-20T20:00:00Z',
    league: { id: 39, name: 'Premier League', country: 'England', season: '2023/24' },
  },
  {
    id: 3,
    homeTeam: {
      id: 33,
      name: 'Manchester United',
      shortName: 'MUN',
      logo: '/logos/man-utd.png',
      primaryColor: '#DA291C',
    },
    awayTeam: {
      id: 50,
      name: 'Manchester City',
      shortName: 'MCI',
      logo: '/logos/man-city.png',
      primaryColor: '#6CABDD',
    },
    homeScore: 1,
    awayScore: 1,
    status: 'live',
    minute: 67,
    date: '2024-03-18T19:45:00Z',
    league: { id: 39, name: 'Premier League', country: 'England', season: '2023/24' },
  },
]
