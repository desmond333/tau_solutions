import { create } from 'zustand'

type NavigationState = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}))
