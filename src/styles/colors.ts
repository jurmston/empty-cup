/**
 * Basic color (hue) names for the color system's raw color paelttes.
 */
export type ColorPalette =
  | 'slate'
  | 'grey'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'


export const colorPalettes: ColorPalette[] = [
  'slate',
  'grey',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]


/**
 * Dervided color names that provide an alias for a semantic name to a `ColorPalette`.
 * Example: primary => blue, secondary => orange, error => red.
 */
export type ThemePalette =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'


export const themePalettes: ThemePalette[] = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error' ,
]


export type Shade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900


export const shades: Shade[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export type Palette = ColorPalette | ThemePalette

export const palettes: Palette[] = [ ...colorPalettes, ...themePalettes ]

export type MiscColor =
  | 'text-primary'
  | 'text-secondary'
  | 'text-disabled'
  | 'ui-background'
  | 'ui-surface'
  | 'ui-divider'

export const miscColors = [
  'text-primary',
  'text-secondary',
  'text-disabled',
  'ui-background',
  'ui-surface',
  'ui-divider',
]

export type Color = `${Palette}-${Shade}` | MiscColor

