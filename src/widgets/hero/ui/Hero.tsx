import { useRef, type MouseEvent } from 'react'
import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { ArrowDownIcon, ArrowUpRightIcon, PlusIcon } from '@phosphor-icons/react'
import { CONTACT_URL } from '@/shared/config'
import { Action } from '@/shared/ui'
import './hero.css'

const STARS = Array.from({ length: 24 }, (_, index) => ({
  x: (index * 37 + 11) % 100,
  y: (index * 23 + 7) % 100,
  delay: (index % 7) * 0.7,
}))
const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 45, damping: 20 })
  const y = useSpring(pointerY, { stiffness: 45, damping: 20 })
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 180])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  function moveScene(event: MouseEvent<HTMLElement>) {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 28)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 22)
  }

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-labelledby="hero-title"
      onMouseMove={moveScene}
      onMouseLeave={() => {
        pointerX.set(0)
        pointerY.set(0)
      }}
    >
      <m.div className="cosmic-scene" aria-hidden="true" style={reducedMotion ? undefined : { y: sceneY, scale: sceneScale }}>
        <m.img
          src="/images/orbital-world.webp"
          alt=""
          className="cosmic-background"
          fetchPriority="high"
          style={reducedMotion ? undefined : { x, y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
        <div className="star-field">
          {STARS.map((star, index) => (
            <span key={index} className="star" style={{ left: `${star.x}%`, top: `${star.y}%`, animationDelay: `${star.delay}s` }} />
          ))}
        </div>
        <div className="orbital-track">
          <span />
        </div>
        <div className="shooting-star" />
      </m.div>
      <m.div className="hero-copy" style={reducedMotion ? undefined : { y: copyY, opacity: copyOpacity }}>
        <h1 id="hero-title">
          {['За пределами', 'обычного.'].map((line, index) => (
            <span className="headline-mask" key={line}>
              <m.span
                initial={reducedMotion ? { opacity: 0 } : { y: '110%', rotate: 3, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.25 + index * 0.16, ease: EASE }}
              >
                {line}
              </m.span>
            </span>
          ))}
        </h1>
        <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          Создаём сайты, приложения и AI решения.
        </m.p>
        <m.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
          <Action asChild>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer">
              Обсудить идею <ArrowUpRightIcon size={18} />
            </a>
          </Action>
          <a className="hero-work-link" href="#projects">
            Наши проекты <ArrowDownIcon size={16} />
          </a>
        </m.div>
      </m.div>
      <m.div
        className="orbital-caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <span className="caption-cross">
          <PlusIcon size={16} weight="light" />
        </span>
        <span>
          Новая перспектива.
          <br />
          <span>Без границ.</span>
        </span>
        <i />
      </m.div>
      <div className="hero-bottom">
        <span className="hero-signature">
          <span /> Digital studio / independent minds
        </span>
        <a href="#expertise" className="scroll-cue">
          <span className="scroll-cue-line" />
          Исследовать дальше
        </a>
        <span className="hero-coordinate">Design · Code · Beyond</span>
      </div>
    </section>
  )
}
