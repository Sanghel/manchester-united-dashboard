# Hook Builder Skill

## 📋 Descripción

Construye custom hooks de React siguiendo best practices: TypeScript estricto, manejo de cleanup, tests exhaustivos, y documentación completa.

## 🎯 Cuándo Usar Esta Skill

- Crear hooks de utilidades (useDebounce, useLocalStorage)
- Hooks de lógica de negocio (useSportsScores)
- Hooks que encapsulan side effects
- Abstraer lógica compartida entre componentes

## 📁 Estructura de Archivos

```
src/hooks/
├── useDebounce.ts       # Hook principal
├── useDebounce.test.ts  # Tests unitarios
└── index.ts             # Barrel export
```

## 🏗️ Template de Hook Utilitario

````typescript
// useDebounce.ts
import { useState, useEffect } from 'react'

/**
 * Debounce de un valor que cambia frecuentemente
 *
 * @param value - Valor a hacer debounce
 * @param delay - Tiempo de espera en ms (default: 500)
 * @returns Valor con debounce aplicado
 *
 * @example
 * ```tsx
 * function SearchComponent() {
 *   const [search, setSearch] = useState('');
 *   const debouncedSearch = useDebounce(search, 300);
 *
 *   useEffect(() => {
 *     // API call con debouncedSearch
 *   }, [debouncedSearch]);
 *
 *   return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
 * }
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
````

## 🏗️ Template de Hook con useQuery

````typescript
// useSportsScores.ts
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { sportsService } from '@/services/sports'
import type { League, ScoresResponse } from '@/types'

/**
 * Obtiene scores de una liga específica
 *
 * @param league - Liga a consultar
 * @param team - Filtro opcional por equipo
 * @returns Query result con scores
 *
 * @example
 * ```tsx
 * function ScoresPage() {
 *   const { data, isLoading, error } = useSportsScores('nba');
 *
 *   if (isLoading) return <Spinner />;
 *   if (error) return <ErrorState />;
 *
 *   return <ScoreList scores={data} />;
 * }
 * ```
 */
export function useSportsScores(league: League, team?: string): UseQueryResult<ScoresResponse> {
  return useQuery({
    queryKey: ['sports', 'scores', league, team],
    queryFn: () => sportsService.getScores(league, team),
    staleTime: 30_000, // 30 segundos
    gcTime: 5 * 60_000, // 5 minutos
    refetchInterval: 30_000, // Refetch cada 30s para datos live
    retry: 3,
    enabled: !!league, // Solo ejecutar si hay liga
  })
}
````

## 🧪 Template de Tests

```typescript
// useDebounce.test.ts
import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500))
    expect(result.current).toBe('initial')
  })

  it('debounces value changes', async () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 500 },
    })

    // Cambiar valor
    rerender({ value: 'updated', delay: 500 })

    // Valor no debe cambiar inmediatamente
    expect(result.current).toBe('initial')

    // Avanzar tiempo
    act(() => {
      vi.advanceTimersByTime(500)
    })

    // Ahora debe estar actualizado
    await waitFor(() => {
      expect(result.current).toBe('updated')
    })
  })

  it('cancels previous timeout on rapid changes', async () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: 'initial' },
    })

    // Múltiples cambios rápidos
    rerender({ value: 'update1' })
    act(() => vi.advanceTimersByTime(200))

    rerender({ value: 'update2' })
    act(() => vi.advanceTimersByTime(200))

    rerender({ value: 'final' })
    act(() => vi.advanceTimersByTime(500))

    // Solo el último valor debe aplicarse
    await waitFor(() => {
      expect(result.current).toBe('final')
    })
  })

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout')
    const { unmount } = renderHook(() => useDebounce('value', 500))

    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
  })
})
```

## 🧪 Template de Tests con React Query

```typescript
// useSportsScores.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSportsScores } from './useSportsScores';
import { sportsService } from '@/services/sports';

// Mock del servicio
vi.mock('@/services/sports', () => ({
  sportsService: {
    getScores: vi.fn(),
  },
}));

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

describe('useSportsScores', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches scores successfully', async () => {
    const mockScores = [
      { homeTeam: 'Lakers', awayTeam: 'Warriors', homeScore: 110, awayScore: 105 },
    ];

    vi.mocked(sportsService.getScores).mockResolvedValue(mockScores);

    const { result } = renderHook(() => useSportsScores('nba'), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(mockScores);
    expect(sportsService.getScores).toHaveBeenCalledWith('nba', undefined);
  });

  it('handles errors correctly', async () => {
    const error = new Error('API Error');
    vi.mocked(sportsService.getScores).mockRejectedValue(error);

    const { result } = renderHook(() => useSportsScores('nba'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.error).toBe(error);
  });

  it('filters by team when provided', async () => {
    vi.mocked(sportsService.getScores).mockResolvedValue([]);

    renderHook(() => useSportsScores('nba', 'Lakers'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(sportsService.getScores).toHaveBeenCalledWith('nba', 'Lakers');
    });
  });

  it('does not fetch when league is not provided', () => {
    renderHook(() => useSportsScores('' as any), {
      wrapper: createWrapper(),
    });

    expect(sportsService.getScores).not.toHaveBeenCalled();
  });
});
```

## ✅ Checklist de Implementación

### Código

- [ ] TypeScript sin errores
- [ ] Tipos de retorno explícitos
- [ ] JSDoc con ejemplo de uso
- [ ] Parámetros con valores por defecto cuando aplique
- [ ] Manejo de cleanup en `useEffect` si hay side effects
- [ ] Memoización con `useMemo`/`useCallback` si es costoso

### Naming

- [ ] Nombre empieza con `use` (convención de React)
- [ ] Nombre descriptivo (`useDebounce`, no `useDeb`)
- [ ] Parámetros con nombres claros

### Testing

- [ ] Tests de comportamiento básico
- [ ] Tests de edge cases
- [ ] Tests de cleanup
- [ ] Tests de dependencias (si usa otros hooks)
- [ ] Coverage >90%

### Documentación

- [ ] JSDoc con descripción
- [ ] JSDoc con `@param` para cada parámetro
- [ ] JSDoc con `@returns`
- [ ] JSDoc con `@example` con código funcional

## 🔧 Comandos

```bash
# Crear estructura
mkdir -p src/hooks
touch src/hooks/{useDebounce.ts,useDebounce.test.ts}

# Ejecutar tests
npm run test -- useDebounce.test.ts

# Ver coverage
npm run test:coverage -- useDebounce.test.ts

# Watch mode
npm run test -- useDebounce.test.ts --watch
```

## 📊 Métricas de Calidad

| Métrica               | Target |
| --------------------- | ------ |
| Test Coverage         | >90%   |
| TypeScript Errors     | 0      |
| Cyclomatic Complexity | <10    |
| Max Parameters        | ≤4     |

## 📚 Ejemplos de Hooks Comunes

### useLocalStorage

```typescript
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue, removeValue]
}
```

### useMediaQuery

```typescript
import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
```

### useToggle

```typescript
import { useState, useCallback } from 'react'

export function useToggle(
  initialValue: boolean = false
): [boolean, () => void, () => void, () => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue((v) => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return [value, toggle, setTrue, setFalse]
}
```

## 🚨 Errores Comunes

❌ **No limpiar side effects**

```typescript
useEffect(() => {
  const timer = setTimeout(() => {...}, 1000);
  // ❌ Falta cleanup
}, []);
```

✅ **Correcto**

```typescript
useEffect(() => {
  const timer = setTimeout(() => {...}, 1000);
  return () => clearTimeout(timer); // ✅
}, []);
```

❌ **Dependencias incorrectas**

```typescript
useEffect(() => {
  fetchData(userId)
}, []) // ❌ Falta userId
```

✅ **Correcto**

```typescript
useEffect(() => {
  fetchData(userId)
}, [userId]) // ✅
```

## 🔗 Skills Relacionadas

- `test-generator` - Para generar tests de hooks
- `jsdoc-generator` - Para documentar hooks
- `service-builder` - Para hooks que usan servicios
