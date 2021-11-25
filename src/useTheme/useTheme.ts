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


export function useTheme(theme: CustomTheme): void {
  React.useEffect(() => {
    // Override theme palette colors
    if (theme.palette) {
      for (let themeColor in theme.palette) {
        const {
          color,
          variants = [50, 200, 500, 700, 900],
        } = (theme.palette as ThemeColors)[themeColor as ThemeColor]

        // Set each variant: --colors-{themeColor}-{themeVariant}
        for (let i = 0; i < 5; i += 1) {
          const colorVariant = variants[i]
          const themeVariant = themeColorVariants[i]

          const value = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(`--colors-${color}-${colorVariant}`)

          window.document.documentElement.style.setProperty(
            `--colors-${themeColor}-${themeVariant}`,
            value,
          )

          // Set the main color to `--colors-{themeColor} as a short-hand
          if (i === 2) {
            window.document.documentElement.style.setProperty(
              `--colors-${themeColor}`,
              value,
            )
          }
        }
      }
    }
  }, [theme])
}