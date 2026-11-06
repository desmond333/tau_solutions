import { m, useReducedMotion } from 'motion/react'
import { ArrowUpRightIcon, BezierCurveIcon, BracketsAngleIcon, LightningIcon } from '@phosphor-icons/react'
import { CONTACT_URL } from '@/shared/config'
import './expertise.css'

const SERVICES = [
  { title: 'Дизайн', description: 'От первого впечатления до последнего клика.', tags: ['UX / UI', 'Сайты'], icon: BezierCurveIcon },
  {
    title: 'Разработка',
    description: 'Сайты и приложения, готовые к росту.',
    tags: ['Веб сервисы', 'Приложения'],
    icon: BracketsAngleIcon,
  },
  { title: 'Автоматизация', description: 'Меньше рутины. Больше возможностей.', tags: ['AI решения', 'Интеграции'], icon: LightningIcon },
]

export function Expertise() {
  const reducedMotion = useReducedMotion()
  return (
    <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
      <div className="expertise-intro">
        <h2 id="expertise-title">
          От замысла
          <br />
          до запуска.
        </h2>
        <p>Три направления. Одна команда.</p>
      </div>
      <div className="service-list">
        {SERVICES.map(({ title, description, tags, icon: Icon }, index) => (
          <m.a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="service-row"
            key={title}
            initial={false}
            whileInView={reducedMotion ? undefined : { x: [32, 0], opacity: [0.3, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="service-icon">
              <Icon size={28} weight="light" />
            </span>
            <div className="service-copy">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <ArrowUpRightIcon className="service-arrow" size={24} />
          </m.a>
        ))}
      </div>
    </section>
  )
}
