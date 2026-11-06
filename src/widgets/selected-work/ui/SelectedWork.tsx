import { ProjectExplorer } from '@/features/project-explorer'
import './selected-work.css'

export function SelectedWork() {
  return (
    <section className="selected-work section-pad" id="projects" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 id="work-title">
          Не просто идеи.
          <br />
          Реальные проекты.
        </h2>
        <p>
          Четыре проекта.
          <br />
          Четыре разных мира.
        </p>
      </div>
      <ProjectExplorer />
    </section>
  )
}
