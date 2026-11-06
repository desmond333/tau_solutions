import { m, useReducedMotion } from 'motion/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { CONTACT_URL, NAVIGATION } from '@/shared/config'
import { Brand } from '@/shared/ui'
import './site-footer.css'

export function SiteFooter() {
  const reducedMotion = useReducedMotion()
  return (
    <footer className="site-footer">
      <div className="contact-panel" id="contact">
        <div className="contact-orbit" aria-hidden="true">
          <img src="/images/orbital-world.webp" alt="" width={1672} height={941} loading="lazy" />
        </div>
        <m.div
          initial={false}
          whileInView={reducedMotion ? undefined : { y: [24, 0], opacity: [0.4, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-top">
            <span>Следующая орбита — ваша.</span>
            <span>Let's go beyond.</span>
          </div>
          <a className="contact-link" href={CONTACT_URL} target="_blank" rel="noreferrer">
            <h2>
              Начнём
              <br />
              что-то большое?
            </h2>
            <span className="contact-arrow">
              <ArrowUpRightIcon weight="light" />
            </span>
          </a>
          <div className="contact-bottom">
            <span>Одна идея. Одно сообщение.</span>
            <a href={CONTACT_URL} target="_blank" rel="noreferrer">
              @desmond333 <ArrowUpRightIcon size={16} />
            </a>
          </div>
        </m.div>
      </div>
      <div className="footer-bottom">
        <Brand />
        <span className="footer-copyright">© {new Date().getFullYear()} Tau Solutions</span>
        <nav aria-label="Навигация в подвале">
          {NAVIGATION.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <span className="footer-signoff">Built to go beyond.</span>
      </div>
    </footer>
  )
}
