import type { GameStats } from '@/services/sports'

export const mockStats: GameStats = {
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
