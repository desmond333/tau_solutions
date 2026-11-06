import { useState } from 'react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { Action, Brand, FilterTabs, Modal, TiltCard } from '@/shared/ui'
import { SiteHeader } from '@/widgets/site-header'
import { Hero } from '@/widgets/hero'
import { Expertise } from '@/widgets/expertise'
import { SelectedWork } from '@/widgets/selected-work'
import { Approach } from '@/widgets/approach'
import { SiteFooter } from '@/widgets/site-footer'
import { MobileNavigation } from '@/features/navigation'
import { ProjectExplorer } from '@/features/project-explorer'
import { ProjectArtwork, PROJECTS } from '@/entities/project'
import './component-gallery.css'

export function ComponentGallery() {
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [tab, setTab] = useState('first')
  const [section, setSection] = useState('hero')

  const sections = [
    { value: 'header', label: 'Шапка', component: SiteHeader },
    { value: 'hero', label: 'Первый экран', component: Hero },
    { value: 'expertise', label: 'Направления', component: Expertise },
    { value: 'work', label: 'Работы', component: SelectedWork },
    { value: 'approach', label: 'Подход', component: Approach },
    { value: 'footer', label: 'Контакт', component: SiteFooter },
  ]
  const Section = sections.find((item) => item.value === section)?.component ?? Hero

  return (
    <main className="container component-gallery">
      <a href="/">Вернуться на сайт</a>
      <h1>Компоненты Tau Solutions</h1>
      <p>Презентационные компоненты на Radix UI. Каталог доступен только в режиме разработки.</p>
      <section>
        <h2>Бренд</h2>
        <Brand />
        <div className="gallery-dark">
          <Brand light />
        </div>
      </section>
      <section>
        <h2>Действия</h2>
        <div className="gallery-row">
          {(['primary', 'dark', 'light', 'ghost'] as const).map((variant) => (
            <Action key={variant} variant={variant}>
              {variant}
              <ArrowUpRightIcon />
            </Action>
          ))}
          <Action disabled>Недоступно</Action>
          <Action size="sm">Маленькая</Action>
          <Action asChild>
            <a href="#tabs-demo">Ссылка</a>
          </Action>
        </div>
      </section>
      <section>
        <h2>Диалог и мобильная панель</h2>
        <div className="gallery-row">
          <Modal
            open={open}
            onOpenChange={setOpen}
            title="Обсудим идею"
            description="Пример модального окна с управлением фокусом и закрытием по Escape."
            trigger={<Action>Открыть диалог</Action>}
          >
            <p>Контент компонента передаётся через children.</p>
            <Action onClick={() => setOpen(false)}>Закрыть</Action>
          </Modal>
          <Modal
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            title="Мобильная панель"
            description="Полноэкранный вариант того же компонента."
            variant="drawer"
            trigger={<Action variant="dark">Открыть панель</Action>}
          >
            <Action onClick={() => setDrawerOpen(false)}>Готово</Action>
          </Modal>
          <MobileNavigation />
        </div>
      </section>
      <section id="tabs-demo">
        <h2>Вкладки с клавиатурной навигацией</h2>
        <FilterTabs
          value={tab}
          onValueChange={setTab}
          items={[
            { value: 'first', label: 'Первый вариант' },
            { value: 'second', label: 'Второй вариант' },
          ]}
          label="Демонстрационные вкладки"
        >
          <p>Выбрано: {tab}</p>
        </FilterTabs>
      </section>
      <section>
        <h2>Превью интерфейсов</h2>
        <div className="gallery-artworks">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <h3>{project.title}</h3>
              <TiltCard maxTilt={project.category === 'miniapp' ? 6 : 3}>
                <ProjectArtwork project={project} />
              </TiltCard>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Просмотр и фильтрация</h2>
        <ProjectExplorer />
      </section>
      <section>
        <h2>Секции лендинга</h2>
        <FilterTabs value={section} onValueChange={setSection} items={sections} label="Секции">
          <div className="gallery-canvas">
            <Section />
          </div>
        </FilterTabs>
      </section>
    </main>
  )
}
