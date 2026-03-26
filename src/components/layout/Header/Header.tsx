import { cn } from '@/lib/utils'
import { useUIStore } from '@/stores'

export interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const { toggleSidebar } = useUIStore()

  return (
    <header
      className={cn('flex items-center h-14 px-4 bg-[#DA291C] text-white shadow-sm', className)}
      role="banner"
    >
      {/* Hamburger */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        onClick={toggleSidebar}
        className="mr-3 p-1.5 rounded hover:bg-white/20 transition-colors md:hidden"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Logo / title */}
      <a
        href="/"
        className="flex items-center gap-2 font-bold text-lg tracking-tight"
        aria-label="Manchester United Dashboard home"
      >
        <span aria-hidden="true">🔴</span>
        <span>MU Dashboard</span>
      </a>

      <div className="ml-auto flex items-center gap-2">
        <span className="text-xs text-white/70 hidden sm:block">2023/24 Season</span>
      </div>
    </header>
  )
}
