import { useMediaQuery } from '../useMediaQuery'

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface UseBreakpointResult {
  breakpoint: Breakpoint
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

/**
 * Returns the current responsive breakpoint and convenience booleans.
 *
 * Breakpoints follow Tailwind defaults:
 *  - sm  ≥ 640px
 *  - md  ≥ 768px
 *  - lg  ≥ 1024px
 *  - xl  ≥ 1280px
 *  - 2xl ≥ 1536px
 *
 * @example
 * ```ts
 * const { breakpoint, isMobile, isTablet, isDesktop } = useBreakpoint()
 * ```
 */
export function useBreakpoint(): UseBreakpointResult {
  const is2xl = useMediaQuery('(min-width: 1536px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isMd = useMediaQuery('(min-width: 768px)')

  let breakpoint: Breakpoint = 'sm'
  if (is2xl) breakpoint = '2xl'
  else if (isXl) breakpoint = 'xl'
  else if (isLg) breakpoint = 'lg'
  else if (isMd) breakpoint = 'md'

  return {
    breakpoint,
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
  }
}
