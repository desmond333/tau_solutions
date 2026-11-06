import { ArrowUpRightIcon, ListIcon } from '@phosphor-icons/react'
import { CONTACT_URL, NAVIGATION } from '@/shared/config'
import { Action, Modal } from '@/shared/ui'
import { useNavigationStore } from '../model/navigationStore'
import './navigation.css'

export function MobileNavigation() {
  const open = useNavigationStore((state) => state.open)
  const setOpen = useNavigationStore((state) => state.setOpen)

  return (
    <div className="mobile-navigation">
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Tau Solutions"
        description="Делаем сложное понятным."
        variant="drawer"
        trigger={
          <button className="icon-button" aria-label="Открыть меню">
            <ListIcon size={24} />
          </button>
        }
      >
        <nav className="mobile-links" aria-label="Мобильная навигация">
          {NAVIGATION.map((link, index) => (
            <a key={link.href} href={link.href} style={{ animationDelay: `${index * 60}ms` }} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRightIcon size={30} />
            </a>
          ))}
        </nav>
        <Action asChild>
          <a href={CONTACT_URL} target="_blank" rel="noreferrer">
            Обсудить проект <ArrowUpRightIcon size={18} />
          </a>
        </Action>
      </Modal>
    </div>
  )
}
