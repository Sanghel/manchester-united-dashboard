# Service Builder Skill

## 📋 Descripción

Construye servicios con cliente HTTP, interceptores, error handling y transformers siguiendo los patrones del proyecto.

## 🎯 Cuándo Usar Esta Skill

- Crear capa de servicios
- Integrar APIs externas
- Implementar interceptores
- Transformar datos de API

## 📁 Estructura de Archivos

```
src/services/sports/
├── sports.service.ts       # Funciones del servicio
├── sports.types.ts         # Tipos TypeScript
├── sports.transformers.ts  # Transformaciones
├── sports.queries.ts       # React Query hooks
└── index.ts                # Barrel export
```

## 🏗️ Template de Service

```typescript
// sports.service.ts
import { apiClient } from '@/services/api/client'
import type { League, ScoresResponse } from './sports.types'
import { transformScores } from './sports.transformers'

export const sportsService = {
  /**
   * Obtiene scores por liga
   */
  async getScores(league: League, team?: string): Promise<ScoresResponse> {
    const response = await apiClient.get('/scores', {
      params: { league, team },
    })
    return transformScores(response.data)
  },

  /**
   * Obtiene standings por liga
   */
  async getStandings(league: League): Promise<StandingsResponse> {
    const response = await apiClient.get('/standings', {
      params: { league },
    })
    return response.data
  },
}
```

## 🔧 Interceptores

```typescript
// interceptors/request.interceptor.ts
export const requestInterceptor = (config) => {
  // Agregar headers comunes
  config.headers['X-Request-ID'] = generateRequestId()

  // Logging en desarrollo
  if (import.meta.env.DEV) {
    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`)
  }

  return config
}

// interceptors/response.interceptor.ts
export const responseInterceptor = (response) => {
  // Extraer data automáticamente
  return response.data
}

// interceptors/error.handler.ts
export const errorHandler = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        toast.error('Request inválido')
        break
      case 401:
        toast.error('No autorizado')
        break
      case 404:
        toast.error('Recurso no encontrado')
        break
      case 500:
        toast.error('Error del servidor')
        break
    }
  } else if (error.request) {
    toast.error('Error de red')
  }

  return Promise.reject(error)
}
```

## 🔄 Transformers

```typescript
// sports.transformers.ts
export const transformScores = (data: ApiScoreResponse[]): ScoresResponse => {
  return data.map((score) => ({
    id: score.game_id,
    homeTeam: {
      name: score.home_team,
      logo: score.home_logo,
      score: score.home_score,
    },
    awayTeam: {
      name: score.away_team,
      logo: score.away_logo,
      score: score.away_score,
    },
    status: mapGameStatus(score.status),
    date: new Date(score.date),
  }))
}
```

## 🪝 React Query Hooks

```typescript
// sports.queries.ts
import { useQuery } from '@tanstack/react-query'
import { sportsService } from './sports.service'

export const useSportsScores = (league: League, team?: string) => {
  return useQuery({
    queryKey: ['sports', 'scores', league, team],
    queryFn: () => sportsService.getScores(league, team),
    staleTime: 30_000,
    refetchInterval: 30_000,
  })
}
```

## ✅ Checklist de Implementación

- [ ] Service con tipos TypeScript
- [ ] Interceptores configurados
- [ ] Error handler centralizado
- [ ] Transformers para normalizar datos
- [ ] React Query hooks
- [ ] Tests con MSW mocking
- [ ] JSDoc completo

## 🔗 Skills Relacionadas

- `hook-builder` - Para los React Query hooks
- `test-generator` - Para tests del servicio
