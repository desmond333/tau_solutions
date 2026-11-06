import * as Tabs from '@radix-ui/react-tabs'
import type { ReactNode } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import './filter-tabs.css'

type FilterTabsProps = {
  value: string
  onValueChange: (value: string) => void
  items: readonly { value: string; label: string }[]
  label: string
  children: ReactNode
}

export function FilterTabs({ value, onValueChange, items, label, children }: FilterTabsProps) {
  const reducedMotion = useReducedMotion()
  return (
    <Tabs.Root value={value} onValueChange={onValueChange}>
      <Tabs.List className="filter-tabs" aria-label={label}>
        {items.map((item) => (
          <Tabs.Trigger className="filter-tab" key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value={value} tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={value}
            className="filter-panel-motion"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: reducedMotion ? 0.1 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </m.div>
        </AnimatePresence>
      </Tabs.Content>
    </Tabs.Root>
  )
}
