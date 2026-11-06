import { SiteHeader } from '@/widgets/site-header'
import { Hero } from '@/widgets/hero'
import { Expertise } from '@/widgets/expertise'
import { SelectedWork } from '@/widgets/selected-work'
import { Approach } from '@/widgets/approach'
import { SiteFooter } from '@/widgets/site-footer'

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <div className="discipline-strip" aria-label="Направления студии">
          <span>Design without limits</span>
          <i aria-hidden="true" />
          <span>Code with purpose</span>
          <i aria-hidden="true" />
          <span>Made for people</span>
          <i aria-hidden="true" />
        </div>
        <Expertise />
        <SelectedWork />
        <Approach />
      </main>
      <SiteFooter />
    </>
  )
}
