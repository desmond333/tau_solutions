import { useEffect, useRef } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { ArrowDownRightIcon, AsteriskIcon } from '@phosphor-icons/react'
import './approach.css'

const WORDS = 'Смело мыслить. Точно создавать.'.split(' ')
const STEPS = [
  { title: 'Понять.', text: 'Находим суть вашей идеи.' },
  { title: 'Создать.', text: 'Превращаем замысел в продукт.' },
  { title: 'Запустить.', text: 'Проверяем. Запускаем. Поддерживаем.' },
]

export function Approach() {
  const textRef = useRef<HTMLHeadingElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const words = textRef.current?.querySelectorAll('span')
    if (!words) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('word--visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 1 },
    )
    for (const word of words) observer.observe(word)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="approach section-pad" id="approach" aria-labelledby="approach-title">
      <div className="approach-top">
        <AsteriskIcon className="approach-asterisk" size={64} weight="light" />
        <span>Идея → форма → запуск</span>
        <ArrowDownRightIcon size={24} />
      </div>
      <div className="approach-stage">
        <div className="approach-stage-copy">
          <h2 ref={textRef} id="approach-title" className="approach-statement">
            {WORDS.map((word, index) => (
              <span key={`${word}-${index}`} style={{ transitionDelay: `${index * 35}ms` }}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p>
            У каждой идеи есть своя траектория.
            <br />
            Находим её и доводим до продукта.
          </p>
          <span className="approach-scene-caption">Strategy → Design → Development</span>
        </div>
        <div className="approach-visual" aria-hidden="true">
          <div className="approach-visual-ring" />
          <m.img
            src="/images/orbital-process.webp"
            alt=""
            width={1280}
            height={1280}
            loading="lazy"
            initial={false}
            whileInView={reducedMotion ? undefined : { rotate: [-12, 0], scale: [0.9, 1], opacity: [0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="approach-orbit-dot" />
        </div>
      </div>
      <div className="approach-steps">
        {STEPS.map((step, index) => (
          <div className="approach-step" key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
