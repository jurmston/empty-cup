import * as React from 'react'


type BreakpointQueries = {
  [key: string]: string
}

const DEFAULT_BREAKPOINT_QUERIES: BreakpointQueries = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 600px)',
  md: '(min-width: 900px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1536px)',
}

type MediaQueryLists = Record<string, MediaQueryList>

export type MediaQueryMatches = {
  [key: string]: boolean
}

/**
 *
 * See: https://betterprogramming.pub/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
 */
export function useBreakpoints(queries: BreakpointQueries = DEFAULT_BREAKPOINT_QUERIES) {
  const [queryMatch, setQueryMatch] = React.useState({} as MediaQueryMatches)

  React.useEffect(
    () => {
      const mediaQueryLists: MediaQueryLists = {}
      const breakpoints = Object.keys(queries)

      // To check whether the event listener is attached
      let isAttached = false

      function handleQueryListener() {
        const updatedMatches = breakpoints.reduce((result, breakpoint) => {
          result[breakpoint] = Boolean(mediaQueryLists[breakpoint].matches)
          return result
        }, {} as MediaQueryMatches)

        // Set the state to the updated matches when the document either
        // starts or stops matching a query.
        setQueryMatch(updatedMatches)
      }

      if (window && window.matchMedia) {
        const matches = {} as MediaQueryMatches

        breakpoints.forEach(breakpoint => {
          if (typeof queries[breakpoint] === 'string') {
            mediaQueryLists[breakpoint] = window.matchMedia(queries[breakpoint])
            matches[breakpoint] = mediaQueryLists[breakpoint].matches
          } else {
            matches[breakpoint] = false
          }
        })

        // Set the state to initial matching queries
        setQueryMatch(matches)

        isAttached = true

        breakpoints.forEach(breakpoint => {
          if (typeof queries[breakpoint] === 'string') {
            mediaQueryLists[breakpoint].addListener(handleQueryListener)
          }
        })
      }

      return () => {
        // If an event listener is attached, remove it.
        if (isAttached) {
          breakpoints.forEach(breakpoint => {
            if (typeof queries[breakpoint] === 'string') {
              mediaQueryLists[breakpoint].removeListener(handleQueryListener)
            }
          })
        }
      }
    },
    [queries]
  )

  return queryMatch
}