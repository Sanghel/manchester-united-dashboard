import { Component, type ReactNode, type ErrorInfo } from 'react'

export interface ErrorBoundaryProps {
  children: ReactNode
  /** Custom fallback UI. Receives the error. */
  fallback?: ReactNode | ((error: Error) => ReactNode)
  /** Called when an error is caught */
  onError?: (error: Error, info: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * React error boundary that catches rendering errors and shows a fallback UI.
 *
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<p>Something went wrong.</p>}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info)
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const { fallback } = this.props
      if (typeof fallback === 'function') {
        return fallback(this.state.error)
      }
      if (fallback) {
        return fallback
      }
      return (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-sm font-semibold text-red-800">Something went wrong</h2>
          <p className="mt-1 text-xs text-red-600">{this.state.error.message}</p>
        </div>
      )
    }

    return this.props.children
  }
}
