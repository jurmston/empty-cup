import * as React from 'react'
import { MenuContext } from './MenuContext'

export function useMenu() {
  const context = React.useContext(MenuContext)

  if (context === undefined) {
    throw new Error(`useMenu must be within Menu`)
  }

  return context
}
