import * as React from 'react'
import { ScreenContext } from './ScreenContext'

export function useScreen() {
  const context = React.useContext(ScreenContext)

  if (context === undefined) {
    throw new Error(`useScreen must be within a ScreenProvider`)
  }

  return context
}
