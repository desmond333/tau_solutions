import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig, LazyMotion, domAnimation } from 'motion/react'
import '@fontsource-variable/onest'
import '@fontsource-variable/unbounded'
import { App } from './app/App'
import './app/styles/base.css'

const root = document.getElementById('root')

if (!root) throw new Error('Не найден корневой элемент приложения')

createRoot(root).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </MotionConfig>
  </StrictMode>,
)
