import { ArrowUpRightIcon, CirclesThreeIcon, GameControllerIcon, PlanetIcon } from '@phosphor-icons/react'
import { m, useReducedMotion } from 'motion/react'
import type { Project } from '../model/projects'
import './project-artwork.css'

export function ProjectArtwork({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion()
  return (
    <div className={`case-art case-art--${project.id} case-art--${project.previewLayout}`}>
      <div className="case-art-orbits" aria-hidden="true">
        <i />
        <i />
        <span />
      </div>
      <m.div
        className="case-art-copy"
        aria-hidden="true"
        initial={false}
        whileInView={reducedMotion ? undefined : { opacity: [0.4, 1], y: [24, 0] }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="case-art-format">{project.format}</span>
        <strong>
          {project.visualTitle.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </strong>
      </m.div>
      <m.div
        className="case-screen-reveal"
        initial={false}
        whileInView={reducedMotion ? undefined : { opacity: [0.2, 1], y: [88, 0], x: [24, 0] }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="case-screen">
          <div className="case-screen-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <i>{project.title}</i>
            <ArrowUpRightIcon size={10} />
          </div>
          <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width={1280} height={800} />
        </div>
      </m.div>
      {project.secondaryImage && (
        <m.div
          className="case-secondary-reveal"
          initial={false}
          whileInView={reducedMotion ? undefined : { opacity: [0.2, 1], y: [112, 0], x: [-32, 0] }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="case-secondary-screen" aria-hidden="true">
            <img src={project.secondaryImage} alt="" loading="lazy" decoding="async" width={390} height={844} />
          </div>
        </m.div>
      )}
      <div className="case-art-signature" aria-hidden="true">
        <span>{project.visualNote}</span>
        <PlanetIcon size={20} weight="light" />
      </div>
      {project.category === 'game' && (
        <div className="case-game-badge" aria-hidden="true">
          <GameControllerIcon size={20} />
          <span>2–4 players</span>
        </div>
      )}
      {project.category === 'tools' && (
        <div className="case-lab-badge" aria-hidden="true">
          <CirclesThreeIcon size={20} />
          <span>Every state matters.</span>
        </div>
      )}
    </div>
  )
}
