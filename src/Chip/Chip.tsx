import * as React from 'react'
import clsx from 'clsx'
import styles from './Chip.module.css'
import { OverrideProps } from '../OverridableComponent'
import { Palette } from '../styles'


export interface ChipOptions {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  palette?: Palette
}


export interface ChipTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & ChipOptions
  defaultComponent: D
}

export type ChipProps<
  D extends React.ElementType = ChipTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ChipTypeMap<P, D>, D>


export function Chip({
  palette = 'default',
  startIcon,
  endIcon,
  children,
  ...rest
}: ChipProps) {

  const isClickable = Boolean(rest.onClick)

  const ChipComponent = isClickable ? 'button' : 'div'

  const computedStyle = {
    '--chip--color': `var(--palette--${palette}-700)`,
    '--chip--bgcolor': `var(--palette--${palette}-200)`,
    '--chip--active-bgcolor': `var(--palette--${palette}-400)`,
    '--chip--hover-bgcolor': `var(--palette--${palette}-300)`,
  } as any

  return (
    <ChipComponent
      style={computedStyle}
      className={clsx(styles.chip, {
        [styles.hasStartIcon]: Boolean(startIcon),
        [styles.hasEndIcon]: Boolean(endIcon),
        [styles.isClickable]: isClickable,
      })}
    >
      {startIcon}
      {children}
      {endIcon}
    </ChipComponent>
  )
}
