import { create } from 'zustand'
import type { ProjectFilter, ProjectId } from '@/entities/project'

type ExplorerState = {
  filter: ProjectFilter
  selectedId: ProjectId | null
  setFilter: (filter: ProjectFilter) => void
  selectProject: (selectedId: ProjectId | null) => void
}

export const useExplorerStore = create<ExplorerState>((set) => ({
  filter: 'all',
  selectedId: null,
  setFilter: (filter) => set({ filter }),
  selectProject: (selectedId) => set({ selectedId }),
}))
