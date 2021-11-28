import * as React from 'react'
import { ScreenContext } from './ScreenContext'
import { useBreakpoints } from './useBreakpoints'
import useEnhancedEffect from '../useEnhancedEffect'

interface ScreenProviderProps {
  children: React.ReactNode
}

export function ScreenProvider({ children }: ScreenProviderProps) {
  const breakpoints = useBreakpoints()
  const [width, setWidth] = React.useState(0)
  const [orientation, setOrientation] = React.useState('landscape')

  const currentBreakpoint = React.useMemo(
    () => Object.keys(breakpoints).reduce((result, breakpoint) => {
      if (breakpoints[breakpoint]) {
        return breakpoint
      }

      return result
    }, 'xs'),
    [breakpoints]
  )

  const handleResize = React.useCallback(
    () => {
      if (window && window.innerWidth) {
        setWidth(window.innerWidth)
      }
    },
    [],
  )

  const handleOrientationChange = React.useCallback(
    () => {
      if (window && window.orientation) {
        setOrientation(window.orientation === 0 ? 'portrait' : 'landscape')
      }
    },
    [],
  )

  // Add the onResize event listener to the window.
  useEnhancedEffect(
    () => {
      if (!window) {
        return
      }

      window.addEventListener('resize', handleResize)
      window.screen?.orientation.addEventListener('change', handleOrientationChange)

      setWidth(window.innerWidth)
      setOrientation(window.screen.orientation.type === 'portrait-primary'
        ? 'portrait'
        : 'landscape'
      )

      return () => {
        window.removeEventListener('resize', handleResize)
        window.screen.orientation.removeEventListener('change', handleOrientationChange)
      }
    },
    [handleResize, handleOrientationChange]
  )

  return (
    <ScreenContext.Provider
      value={{
        breakpoints,
        width,
        currentBreakpoint,
        orientation,
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}