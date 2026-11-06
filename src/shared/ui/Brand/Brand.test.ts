import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brand } from './Brand'

describe('Brand', () => {
  it('даёт понятное название ссылке на главную', () => {
    render(createElement(Brand))
    expect(screen.getByRole('link', { name: 'Tau Solutions — на главную' })).toHaveAttribute('href', '/')
  })
})
