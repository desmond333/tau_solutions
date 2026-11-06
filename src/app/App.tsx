import { lazy, Suspense } from 'react'
import { m, useScroll, useSpring } from 'motion/react'
import { HomePage } from '@/pages/home'

const ComponentGallery = lazy(() => import('@/pages/component-gallery').then((module) => ({ default: module.ComponentGallery })))

export function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  if (import.meta.env.DEV && window.location.pathname === '/dev/components') {
    return (
      <Suspense fallback={<main className="container">Загружаем компоненты…</main>}>
        <ComponentGallery />
      </Suspense>
    )
  }

  return (
    <>
      <m.div className="page-progress" aria-hidden="true" style={{ scaleX: progress }} />
      <HomePage />
    </>
  )
}
