import { useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
  /** Called when the sentinel element comes into view */
  onLoadMore: () => void
  /** Whether a load is already in progress */
  isLoading?: boolean
  /** Whether there are more items to load */
  hasMore?: boolean
  /** Root margin for the IntersectionObserver (default: '0px') */
  rootMargin?: string
  /** Intersection threshold (default: 0.1) */
  threshold?: number
}

/**
 * Returns a ref to attach to a sentinel element at the bottom of a list.
 * Calls onLoadMore when the sentinel becomes visible.
 *
 * @example
 * ```tsx
 * const sentinelRef = useInfiniteScroll({ onLoadMore: loadNextPage, hasMore, isLoading })
 * return <div><List /><div ref={sentinelRef} /></div>
 * ```
 */
export function useInfiniteScroll({
  onLoadMore,
  isLoading = false,
  hasMore = true,
  rootMargin = '0px',
  threshold = 0.1,
}: UseInfiniteScrollOptions) {
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const onLoadMoreRef = useRef(onLoadMore)
  onLoadMoreRef.current = onLoadMore

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || isLoading || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          onLoadMoreRef.current()
        }
      },
      { rootMargin, threshold }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [isLoading, hasMore, rootMargin, threshold])

  return sentinelRef
}
