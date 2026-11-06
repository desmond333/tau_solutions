import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from '@phosphor-icons/react'
import type { ReactNode, RefObject } from 'react'
import './modal.css'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  children: ReactNode
  variant?: 'dialog' | 'drawer'
  trigger?: ReactNode
  restoreFocusRef?: RefObject<HTMLElement | null>
  size?: 'md' | 'lg'
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  variant = 'dialog',
  trigger,
  restoreFocusRef,
  size = 'md',
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content
          className={`modal modal--${variant} modal--${size}`}
          onCloseAutoFocus={(event) => {
            if (restoreFocusRef?.current) {
              event.preventDefault()
              restoreFocusRef.current.focus()
            }
          }}
        >
          <div className="modal-heading">
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Close className="icon-button" aria-label="Закрыть окно">
              <XIcon size={24} />
            </Dialog.Close>
          </div>
          <Dialog.Description className="modal-description">{description}</Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
