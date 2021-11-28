import * as React from "react"
import { useScreen } from '../ScreenProvider'


const BREAKPOINTS = {
  xs: ['xs'],
  sm: ['xs', 'sm'],
  md: ['xs', 'sm', 'md'],
  lg: ['xs', 'sm', 'md', 'lg'],
  xl: ['xs', 'sm', 'md', 'lg', 'xl'],
}

const BREAKPOINT_PROPS = new Set(['xs', 'sm', 'md', 'lg', 'xl'])

export type SxColorProp =
  | 'color'
  | 'bg'
  | 'borderColor'

const COLOR_PROPS = new Set([ 'color', 'bg', 'borderColor' ])

export type SxSpacingProp =
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'

const SPACING_PROPS = new Set([
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
])

export type SxUnitProp =
  | 'borderRadius'
  | 'gap'
  | 'rowGap'
  | 'columnGap'


const UNIT_PROPS = new Set([
  'borderRadius', 'gap', 'rowGap', 'columnGap'
])


type SxSizeProp =
  | 'w'
  | 'h'
  | 'wMin'
  | 'wMax'
  | 'hMin'
  | 'hMax'
  | 'square'

const SIZE_PROPS = new Set(['w', 'h', 'wMin', 'wMax', 'hMin', 'hMax', 'square'])


export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'


export type SxRestProp =
  | 'border'
  | 'shadow'
  | 'stack'
  | 'grid'
  | 'span'


export type SxProps = {
  [key in SxSpacingProp | SxColorProp | SxUnitProp | SxSizeProp | SxRestProp ]?: string | number
}



export function composeSxStyles(sx: SxProps | React.CSSProperties = {}): Partial<React.CSSProperties> {
  const result: Partial<React.CSSProperties> = {}

  function applySpacingProp(prop: SxSpacingProp, value: number): void {
    const type = prop.charAt(0) === 'm'
      ? 'margin'
      : prop.charAt(0) === 'p'
      ? 'padding'
      : ''

    // Skip invalid types
    if (!type) {
      return
    }

    const variant = prop.charAt(1)
    const computedSpacingValue = `calc(var(--unit) * ${value})`

    switch (variant) {
      case 'x': {
        result[`${type}Right`] = computedSpacingValue
        result[`${type}Left`] = computedSpacingValue
        break
      }

      case 'y': {
        result[`${type}Top`] = computedSpacingValue
        result[`${type}Bottom`] = computedSpacingValue
        break
      }

      case 't': {
        result[`${type}Top`] = computedSpacingValue
        break
      }

      case 'r': {
        result[`${type}Right`] = computedSpacingValue
        break
      }

      case 'b': {
        result[`${type}Bottom`] = computedSpacingValue
        break
      }

      case 'l': {
        result[`${type}Left`] = computedSpacingValue
        break
      }

      case '': {
        result[type] = computedSpacingValue
        break
      }

      default: {
        /* Do nothing */
      }
    }
  }

  function applyColorProp(prop: SxColorProp, value: string ): void {
    switch (prop) {
      case 'color': {
        result.color = `var(--palette--${value})`
        break
      }

      case 'bg': {
        result.backgroundColor = `var(--palette--${value})`
        break
      }

      case 'borderColor': {
        result.borderColor = `var(--palette--${value})`
        break
      }

      default: {
        /* Do nothing */
      }
    }
  }

  function applySizeProp(prop: SxSizeProp, value: number): void {
    const rawSize = Math.max(0, sx[prop as SxSizeProp] as number)
    const size = rawSize <= 1
      ? `${rawSize * 100}%`
      : rawSize

    switch (prop) {
      case 'w': {
        result.width = size
        break
      }

      case 'h': {
        result.height = size
        break
      }

      case 'wMin': {
        result.minWidth = size
        break
      }

      case 'wMax': {
        result.maxWidth = size
        break
      }

      case 'hMin': {
        result.minHeight = size
        break
      }

      case 'hMax': {
        result.maxHeight = size
        break
      }

      case 'square': {
        result.width = size
        result.height = size
        break
      }

      default: {
        /* Do nothing */
      }
    }

  }

  Object.entries(sx).forEach(([prop, value]) => {
    // Skip breakpoint props
    if (BREAKPOINT_PROPS.has(prop)) return

    switch (true) {
      case SPACING_PROPS.has(prop): {
        applySpacingProp(prop as SxSpacingProp, sx[prop as SxSpacingProp] as number)
        break
      }

      case COLOR_PROPS.has(prop): {
        applyColorProp(prop as SxColorProp, sx[prop as SxColorProp] as string)
        break
      }

      case UNIT_PROPS.has(prop): {
        result[prop as SxUnitProp] = `calc(var(--unit) * ${sx[prop as SxUnitProp] as number})`
        break
      }

      case SIZE_PROPS.has(prop): {
        applySizeProp(prop as SxSizeProp, value as number)
        break
      }

      case prop === 'border': {
        result.borderWidth = `calc(var(--unit) * ${sx.border})`
        result.borderStyle = 'solid'
        break
      }

      case prop === 'shadow': {
        result.boxShadow = `var(--shadows--${sx.shadow})`
        break
      }

      case prop === 'stack': {
        const [
          direction = 'row',
          justify = 'flex-start',
          alignItems = 'flex-start'
        ] = ((sx.stack as string) ?? '').split(' ')

        result.display = 'flex'
        result.flexDirection = direction as FlexDirection
        result.justifyContent = justify
        result.alignItems = alignItems
        break
      }

      case prop === 'transition': {
        const [elements, duration, curve] = value.split(' ')
        result.transition = elements.split(',').map(element =>
          `${element} var(--transition--duration-${duration}) var(--transition--curve-${curve})`
        ).join(',')
        break
      }

      case prop === 'grid': {
        const columns = sx.grid as number

        result.display = 'grid'
        result.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr)`
        break
      }

      case prop === 'span': {
        result.gridColumn = value === 'full'
          ? '1 / -1'
          : `span ${value} / span ${value}`
        break
      }

      default: {
        /* Apply as-is */
        (result as any)[prop] = value
      }
    }
  })

  return result
}


export function useSx(sx: SxProps) {
  const { currentBreakpoint } = useScreen()
  const [styles, setStyles] = React.useState(null)

  React.useEffect(
    () => {
      if (!sx) {
        return
      }

      let computedStyles = composeSxStyles(sx)

      for (let bp of (BREAKPOINTS as any)[currentBreakpoint]) {
        if ((sx as any)[bp]) {
          computedStyles = { ...computedStyles, ...composeSxStyles((sx as any)[bp] as Partial<React.CSSProperties>) }
        }
      }

      setStyles(computedStyles)
    },
    [sx, currentBreakpoint]
  )

  return styles
}