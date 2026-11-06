import { createElement } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { ProjectExplorer } from './ProjectExplorer'
import { useExplorerStore } from '../model/explorerStore'

describe('Просмотр реальных проектов', () => {
  beforeEach(() => useExplorerStore.setState({ filter: 'all', selectedId: null }))

  it('фильтрует карточки, открывает детали и восстанавливает фокус', async () => {
    const user = userEvent.setup()
    render(createElement(ProjectExplorer))
    expect(screen.getAllByRole('article')).toHaveLength(4)
    await user.click(screen.getByRole('tab', { name: 'Игры' }))
    await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(1))
    const opener = screen.getByRole('button', { name: 'Подробнее: Линия обороны' })
    await user.click(opener)
    expect(screen.getByRole('dialog', { name: 'Линия обороны' })).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toHaveTextContent('Локальные матчи на 2–4 игроков и боты')
    expect(screen.getByRole('link', { name: 'Обсудить похожую задачу' })).toHaveAttribute('href', 'https://t.me/desmond333')
    await user.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
    await waitFor(() => expect(opener).toHaveFocus())
  })

  it('показывает честный статус TAU и его настоящий экран', async () => {
    const user = userEvent.setup()
    render(createElement(ProjectExplorer))
    await user.click(screen.getByRole('tab', { name: 'Продукты' }))
    await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(1))
    expect(screen.getByRole('img', { name: /TAU: редактор заметок/ })).toHaveAttribute('src', '/projects/life-desktop.webp')
    await user.click(screen.getByRole('button', { name: 'Подробнее: TAU' }))
    expect(screen.getByRole('dialog', { name: 'TAU' })).toHaveTextContent('Закрытая бета ещё не запущена')
  })
})
