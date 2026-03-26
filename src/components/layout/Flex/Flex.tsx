import { cn } from '@/lib/utils'

export type FlexDirection = 'row' | 'col'
export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexGap = 'sm' | 'md' | 'lg'

export interface FlexProps {
  children: React.ReactNode
  direction?: FlexDirection
  justify?: FlexJustify
  align?: FlexAlign
  gap?: FlexGap
  wrap?: boolean
  className?: string
}

const directionClasses: Record<FlexDirection, string> = {
  row: 'flex-row',
  col: 'flex-col',
}

const justifyClasses: Record<FlexJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

const alignClasses: Record<FlexAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
}

const gapClasses: Record<FlexGap, string> = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

export function Flex({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  gap,
  wrap = false,
  className,
}: FlexProps) {
  return (
    <div
      className={cn(
        'flex',
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
        gap && gapClasses[gap],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  )
}
