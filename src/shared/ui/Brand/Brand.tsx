import { PlanetIcon } from '@phosphor-icons/react'
import './brand.css'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="/" aria-label="Tau Solutions — на главную">
      <PlanetIcon className="brand-symbol" size={36} weight="light" aria-hidden="true" />
      <span className="brand-name">
        tau<span>solutions</span>
      </span>
    </a>
  )
}
