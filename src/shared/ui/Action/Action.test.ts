import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Action } from './Action'

describe('Action', () => {
  it('передаёт поведение ссылке через Radix Slot без вложенной кнопки', () => {
    render(createElement(Action, { asChild: true }, createElement('a', { href: 'https://t.me/desmond333' }, 'Обсудить')))
    expect(screen.getByRole('link', { name: 'Обсудить' })).toHaveAttribute('href', 'https://t.me/desmond333')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('не вызывает действие для недоступной кнопки', async () => {
    const onClick = vi.fn()
    render(createElement(Action, { disabled: true, onClick }, 'Недоступно'))
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
