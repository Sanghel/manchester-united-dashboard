// ─── Atomic UI components (MU redesign) ───────────────────────────────────────
export * from './Button'
export * from './Badge'
export * from './Icon'
export * from './Skeleton'
export * from './Spinner'

// ─── Legacy buttons (ButtonGroup, IconButton) ─────────────────────────────────
export { ButtonGroup } from './buttons/ButtonGroup'
export type { ButtonGroupProps, ButtonGroupOrientation } from './buttons/ButtonGroup'

export { IconButton } from './buttons/IconButton'
export type { IconButtonProps } from './buttons/IconButton'

// ─── Legacy feedback (Chip, EmptyState, Toast, ErrorBoundary) ─────────────────
export { Chip } from './feedback/Chip'
export type { ChipProps } from './feedback/Chip'

export { EmptyState } from './feedback/EmptyState'
export type { EmptyStateProps } from './feedback/EmptyState'

export { ToastProvider, useToast } from './feedback/Toast'
export type { ToastProviderProps, Toast, ToastVariant } from './feedback/Toast'

export { ErrorBoundary } from './feedback/ErrorBoundary'
export type { ErrorBoundaryProps } from './feedback/ErrorBoundary'
