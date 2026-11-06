import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { MobileNavigation } from '@/features/navigation'
import { CONTACT_URL, NAVIGATION } from '@/shared/config'
import { Action, Brand } from '@/shared/ui'
import './site-header.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-navigation" aria-label="Основная навигация">
        {NAVIGATION.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <Action className="header-contact" variant="dark" size="sm" asChild>
        <a href={CONTACT_URL} target="_blank" rel="noreferrer">
          Давайте обсудим <ArrowUpRightIcon size={16} />
        </a>
      </Action>
      <MobileNavigation />
    </header>
  )
}
