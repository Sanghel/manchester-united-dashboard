import { cn } from '@/lib/utils'

export type ContainerMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: ContainerMaxWidth
}

const maxWidthClasses: Record<ContainerMaxWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
}

export function Container({ children, className, maxWidth = 'full' }: ContainerProps) {
  return (
    <div
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', maxWidthClasses[maxWidth], className)}
    >
      {children}
    </div>
  )
}
