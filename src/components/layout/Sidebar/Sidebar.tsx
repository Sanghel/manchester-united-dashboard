import { cn } from '@/lib/utils'
import { useUIStore } from '@/stores'

interface NavItem {
  label: string
  href: string
  icon?: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Scores', href: '/scores', icon: '⚽' },
  { label: 'Standings', href: '/standings', icon: '📊' },
  { label: 'Search', href: '/search', icon: '🔍' },
]

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const { sidebarOpen, setSidebarOpen } = useUIStore()

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          'fixed top-14 left-0 z-30 h-[calc(100vh-3.5rem)] w-56 bg-gray-900 text-gray-100',
          'transform transition-transform duration-200 ease-in-out',
          'md:translate-x-0 md:static md:h-auto md:z-auto',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <ul className="py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors rounded-md mx-2"
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon && <span aria-hidden="true">{item.icon}</span>}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
