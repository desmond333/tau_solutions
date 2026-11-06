import { Slot } from '@radix-ui/react-slot'
import type { ComponentProps } from 'react'
import './action.css'

type ActionProps = ComponentProps<'button'> & {
  asChild?: boolean
  variant?: 'primary' | 'dark' | 'light' | 'ghost'
  size?: 'sm' | 'md'
}

export function Action({ asChild = false, variant = 'primary', size = 'md', className = '', ...props }: ActionProps) {
  const Component = asChild ? Slot : 'button'
  return <Component className={`action action--${variant} action--${size} ${className}`} {...props} />
}
