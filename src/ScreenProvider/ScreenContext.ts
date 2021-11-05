import * as React from 'react'

import { MediaQueryMatches } from './useBreakpoints'


export const ScreenContext = React.createContext({
  breakpoints: {} as MediaQueryMatches,
  width: 0,
  currentBreakpoint: 'md',
  orientation: 'landscape',
})
