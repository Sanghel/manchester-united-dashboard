import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <main
      className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center"
      role="main"
    >
      <p className="text-6xl font-black text-gray-200 mb-4">404</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Page not found</h1>
      <p className="text-gray-500 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
      >
        Go home
      </button>
    </main>
  )
}
