import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { TiltCard } from './TiltCard'

describe('TiltCard', () => {
  it('сохраняет клавиатурный доступ и действия дочернего элемента', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(createElement(TiltCard, { children: createElement('button', { onClick }, 'Открыть проект') }))
    await user.tab()
    expect(screen.getByRole('button', { name: 'Открыть проект' })).toHaveFocus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalledOnce()
  })
})
