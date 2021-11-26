import * as React from 'react'


interface ThemeColorOverride {
  color: string
  variants?: [number, number, number, number, number]
}


export type ThemeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'


type ThemeColors = { [key in ThemeColor]?: ThemeColorOverride }

interface CustomTheme {
  palette?: ThemeColors
}


const themeColorVariants = ['super-light', 'light', 'main', 'dark', 'super-dark']
const colorVariants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]


function getColorValue(color: string, variant: string | number): string {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--colors-${color}-${variant}`)
}

function setColorValue(color: string, variant: string | number, value: string): void {
  window.document.documentElement.style.setProperty(
    `--colors-${color}${variant ? '-' : ''}${variant}`,
    value,
  )
}


export function useTheme(theme: CustomTheme): void {
  React.useEffect(() => {
    // Override theme palette colors
    if (theme.palette) {
      for (let themeColor in theme.palette) {
        const {
          color,
          variants = [50, 200, 500, 700, 900],
        } = (theme.palette as ThemeColors)[themeColor as ThemeColor]!

        // Set each theme variant: --colors-{themeColor}-{themeVariant}
        for (let i = 0; i < 5; i += 1) {
          const colorVariant = variants[i]
          const themeVariant = themeColorVariants[i]

          const value = getColorValue(color, colorVariant)
          setColorValue(themeColor, themeVariant, value)

          // Set the main color to `--colors-{themeColor} as a short-hand
          if (i === 2) {
            setColorValue(themeColor, '', value)
          }
        }

        // Set the color vairants for each theme value (i.e. 50 - 900)
        for (let variant of colorVariants) {
          const value = getColorValue(color, variant)
          setColorValue(themeColor, variant, value)
        }
      }
    }
  }, [theme])
}