import { createElement, useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FilterTabs } from './FilterTabs'

function Demo() {
  const [value, setValue] = useState('all')
  return createElement(FilterTabs, {
    value,
    onValueChange: setValue,
    label: 'Направления',
    items: [
      { value: 'all', label: 'Все' },
      { value: 'web', label: 'Сайты' },
    ],
    children: value,
  })
}

describe('FilterTabs', () => {
  it('переключается стрелками и связывает вкладку с панелью', async () => {
    const user = userEvent.setup()
    render(createElement(Demo))
    await user.tab()
    expect(screen.getByRole('tab', { name: 'Все' })).toHaveFocus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Сайты' })).toHaveAttribute('aria-selected', 'true')
    await waitFor(() => expect(screen.getByRole('tabpanel', { name: 'Сайты' })).toHaveTextContent('web'))
  })
})
