import { cn } from '@/lib/utils'

export type GridCols = 1 | 2 | 3 | 4
export type GridGap = 'sm' | 'md' | 'lg'

export interface GridProps {
  children: React.ReactNode
  cols?: GridCols
  gap?: GridGap
  className?: string
}

const colsClasses: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

const gapClasses: Record<GridGap, string> = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

export function Grid({ children, cols = 1, gap = 'md', className }: GridProps) {
  return <div className={cn('grid', colsClasses[cols], gapClasses[gap], className)}>{children}</div>
}
