import { useRef, type MouseEvent } from 'react'
import { m } from 'motion/react'
import { ArrowUpRightIcon, CheckIcon } from '@phosphor-icons/react'
import { PROJECTS, PROJECT_FILTERS, ProjectArtwork, filterProjects, isProjectFilter, type ProjectId } from '@/entities/project'
import { CONTACT_URL } from '@/shared/config'
import { Action, FilterTabs, Modal, TiltCard } from '@/shared/ui'
import { useExplorerStore } from '../model/explorerStore'
import './project-explorer.css'

export function ProjectExplorer() {
  const filter = useExplorerStore((state) => state.filter)
  const selectedId = useExplorerStore((state) => state.selectedId)
  const setFilter = useExplorerStore((state) => state.setFilter)
  const selectProject = useExplorerStore((state) => state.selectProject)
  const selectedProject = PROJECTS.find((project) => project.id === selectedId)
  const projects = filterProjects(filter)
  const openerRef = useRef<HTMLButtonElement>(null)

  function handleFilter(value: string) {
    if (isProjectFilter(value)) setFilter(value)
  }

  function openProject(event: MouseEvent<HTMLButtonElement>, id: ProjectId) {
    openerRef.current = event.currentTarget
    selectProject(id)
  }

  return (
    <>
      <FilterTabs value={filter} onValueChange={handleFilter} items={PROJECT_FILTERS} label="Фильтр проектов">
        <div className={`project-grid ${projects.length === 1 ? 'project-grid--single' : ''}`}>
          {projects.map((project) => (
            <m.article
              className={`project-card project-card--${project.id}`}
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard maxTilt={3}>
                <button
                  className="project-preview"
                  onClick={(event) => openProject(event, project.id)}
                  aria-label={`Подробнее: ${project.title}`}
                >
                  <ProjectArtwork project={project} />
                  <span className="project-preview-link">
                    <span>Смотреть проект</span>
                    <ArrowUpRightIcon size={22} />
                  </span>
                </button>
              </TiltCard>
              <div className="project-info">
                <div className="project-identity">
                  <h3>
                    <button onClick={(event) => openProject(event, project.id)}>
                      {project.title}
                      <ArrowUpRightIcon size={20} />
                    </button>
                  </h3>
                  <span>{project.subtitle}</span>
                </div>
                <p>{project.caption}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </FilterTabs>
      <Modal
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) selectProject(null)
        }}
        title={selectedProject?.title ?? 'Проект'}
        description={selectedProject?.subtitle ?? 'Проект Tau Solutions'}
        size="lg"
        restoreFocusRef={openerRef}
      >
        {selectedProject && (
          <div className="project-detail">
            <div className="project-detail-art">
              <ProjectArtwork project={selectedProject} />
            </div>
            <div className="project-detail-body">
              <div>
                <p className="project-detail-description">{selectedProject.description}</p>
                <div className="project-stack">
                  {selectedProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <ul>
                {selectedProject.capabilities.map((item) => (
                  <li key={item}>
                    <CheckIcon size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {selectedProject.note && <p className="project-detail-note">{selectedProject.note}</p>}
            <Action asChild>
              <a href={CONTACT_URL} target="_blank" rel="noreferrer">
                Обсудить похожую задачу <ArrowUpRightIcon size={18} />
              </a>
            </Action>
          </div>
        )}
      </Modal>
    </>
  )
}
