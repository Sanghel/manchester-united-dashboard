# JSDoc Generator Skill

## 📋 Descripción

Genera documentación JSDoc completa para funciones, componentes y hooks.

## 🎯 Cuándo Usar

- Al crear funciones públicas
- Para documentar APIs
- Componentes y hooks

## 📝 Templates

### Componente

````typescript
/**
 * Botón principal de la aplicación con múltiples variantes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 *
 * @example Con icono
 * ```tsx
 * <Button variant="primary" leftIcon={<Mail />}>
 *   Send Email
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Tamaño del botón */
  size?: 'sm' | 'md' | 'lg'
  /** Muestra un spinner y deshabilita el botón */
  loading?: boolean
  /** Icono a la izquierda del texto */
  leftIcon?: React.ReactNode
  /** Click handler */
  onClick?: () => void
}
````

### Hook

````typescript
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
export function useDebounce<T>(value: T, delay: number = 500): T
````

### Función

````typescript
/**
 * Combina clases CSS usando clsx y tailwind-merge
 *
 * @param inputs - Clases a combinar
 * @returns String de clases combinadas sin duplicados
 *
 * @example
 * ```ts
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4'
 * cn('text-red-500', { 'text-blue-500': isActive }) // => 'text-blue-500'
 * ```
 */
export function cn(...inputs: ClassValue[]): string
````

## ✅ Elementos Requeridos

- [ ] Descripción breve y clara
- [ ] `@param` para cada parámetro
- [ ] `@returns` para valor de retorno
- [ ] `@example` con código funcional
- [ ] Tipos TypeScript correctos

## 🔗 Skills Relacionadas

- `component-builder` - Genera JSDoc automáticamente
- `hook-builder` - Documenta hooks
