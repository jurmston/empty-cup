import * as React from 'react'


export interface MenuContextType {
  listRef: React.RefObject<HTMLUListElement> | null
  controlRef: React.RefObject<HTMLButtonElement> | null
  isOpen: boolean
  open: () => void,
  close: () => void,
  toggle: (value?: boolean) => void,
}


export const MenuContext = React.createContext<MenuContextType>({
  listRef: null,
  controlRef: null,
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
})
