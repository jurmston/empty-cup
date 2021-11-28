import React from 'react'
import { ScreenProvider } from '../src/ScreenProvider'
import '../src/styles/main.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  // MUI Theme Provider
  (Story, context) => {
    return (
      <ScreenProvider>
        <Story {...context} />
      </ScreenProvider>
    )
  },
]
