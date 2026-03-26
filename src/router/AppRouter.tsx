import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Spinner } from '@/components/ui/feedback/Spinner'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { Home } from '@/pages/Home'
import { Standings } from '@/pages/Standings'
import { Game } from '@/pages/Game'
import { Search } from '@/pages/Search'
import { League } from '@/pages/League'
import { NotFound } from '@/pages/NotFound'

function PageLoader() {
  return (
    <div className="flex justify-center items-center h-64">
      <Spinner size="xl" />
    </div>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 min-w-0">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/scores" element={<Home />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/game/:id" element={<Game />} />
                <Route path="/search" element={<Search />} />
                <Route path="/league/:id" element={<League />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
