export const colors = {
  'mu-red-primary': '#DA291C',
  'mu-red-secondary': '#C1232B',
  'mu-gold': '#FFB81C',
  'bg-dark': '#1A1A1A',
  'bg-card': '#2A2A2A',
  'bg-sidebar': '#0E1117',
  'text-primary': '#FFFFFF',
  'text-secondary': '#B0B0B0',
  'success-green': '#10B981',
  'warning-orange': '#F59E0B',
  'error-red': '#EF4444',
} as const

export type ColorToken = keyof typeof colors
