import { createElement, useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Modal } from './Modal'

function Demo() {
  const [open, setOpen] = useState(false)
  return createElement(Modal, {
    open,
    onOpenChange: setOpen,
    title: 'Детали проекта',
    size: 'lg',
    description: 'Описание проекта',
    trigger: createElement('button', null, 'Открыть'),
    children: createElement('a', { href: '#contact' }, 'Связаться'),
  })
}

describe('Modal', () => {
  it('открывает доступный диалог и возвращает фокус после Escape', async () => {
    const user = userEvent.setup()
    render(createElement(Demo))
    const trigger = screen.getByRole('button', { name: 'Открыть' })
    await user.click(trigger)
    expect(screen.getByRole('dialog', { name: 'Детали проекта' })).toHaveAccessibleDescription('Описание проекта')
    await user.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
    await waitFor(() => expect(trigger).toHaveFocus())
  })
})
