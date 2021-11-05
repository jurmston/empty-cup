import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { ScreenProvider } from './ScreenProvider'
import { ScreenContext } from './ScreenContext'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Providers/ScreenProvider',
  component: ScreenProvider,
} as ComponentMeta<typeof ScreenProvider>


export const Primary = () => {

  return (
    <ScreenProvider>
      <ScreenContext.Consumer>
        {({ breakpoints, width, currentBreakpoint, orientation }) => (
          <>
            {Object.keys(breakpoints).map(breakpoint => (
              <p key={breakpoint}>
                <strong>{breakpoint}</strong>
                : {`${breakpoints[breakpoint]}`}
              </p>
            ))}

            <p><strong>Width</strong>: {width}px</p>
            <p><strong>Current Breakpoint</strong>: {currentBreakpoint}</p>
            <p><strong>Orientation</strong>: {orientation}</p>
          </>
        )}
      </ScreenContext.Consumer>
    </ScreenProvider>
  )
}
