import { describe, expect, it } from 'vitest'
import { PROJECTS, filterProjects, isProjectFilter } from './projects'

describe('Фильтрация проектов', () => {
  it('возвращает четыре реальных проекта без фильтра', () => {
    expect(filterProjects('all')).toEqual(PROJECTS)
    expect(filterProjects('all').map((project) => project.title)).toEqual(['TAU', 'Яна Алфимова', 'Automata Lab', 'Линия обороны'])
  })

  it.each(['product', 'miniapp', 'tools', 'game'] as const)('оставляет только направление %s', (category) => {
    const result = filterProjects(category)
    expect(result).toHaveLength(1)
    expect(result.every((project) => project.category === category)).toBe(true)
  })

  it('отклоняет неизвестный фильтр', () => {
    expect(isProjectFilter('unknown')).toBe(false)
    expect(isProjectFilter('product')).toBe(true)
  })
})
