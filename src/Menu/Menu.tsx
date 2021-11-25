import * as React from 'react'
import useOpenable from '../useOpenable'
import { MenuContext } from './MenuContext'


interface MenuProps {
  children: React.ReactNode
}

export function Menu({ children }: MenuProps) {
  const [isOpen, { open, close, toggle }] = useOpenable(false)

  const controlRef = React.useRef<HTMLButtonElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)

  return (
    <MenuContext.Provider
      value={{
        controlRef,
        listRef,
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
