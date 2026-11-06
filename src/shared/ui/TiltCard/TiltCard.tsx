import type { PointerEvent, ReactNode } from 'react'
import { m, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import './tilt-card.css'

type TiltCardProps = {
  children: ReactNode
  className?: string
  maxTilt?: number
  glare?: boolean
}

const SPRING = { stiffness: 110, damping: 25, mass: 0.8 }

export function TiltCard({ children, className = '', maxTilt = 4, glare = true }: TiltCardProps) {
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [maxTilt, -maxTilt]), SPRING)
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-maxTilt, maxTilt]), SPRING)
  const glareX = useTransform(pointerX, [0, 1], ['0%', '100%'])
  const glareY = useTransform(pointerY, [0, 1], ['0%', '100%'])
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(180 210 255 / .14), transparent 55%)`
  const glareOpacity = useSpring(0, SPRING)

  function reset() {
    pointerX.set(0.5)
    pointerY.set(0.5)
    glareOpacity.set(0)
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width)
    pointerY.set((event.clientY - rect.top) / rect.height)
    glareOpacity.set(1)
  }

  return (
    <m.div
      className={`tilt-card ${className}`}
      style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400 }}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
      {glare && <m.div className="tilt-card-glare" aria-hidden="true" style={{ background: glareBackground, opacity: glareOpacity }} />}
    </m.div>
  )
}
