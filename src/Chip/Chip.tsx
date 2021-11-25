import * as React from 'react'
import clsx from 'clsx'
import styles from './Chip.module.css'
import { OverrideProps } from '../OverridableComponent'
import { ThemeColor } from '../types'


interface ChipTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component.
     */
     startIcon?: React.ReactNode
     endIcon?: React.ReactNode
     color: ThemeColor
  }
  defaultComponent: D
}


type ChipProps<
  D extends React.ElementType = ChipTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ChipTypeMap<P, D>, D>


export function Chip({
  color = 'default',
  startIcon,
  endIcon,
  children,
  ...rest
}: ChipProps) {

  const isClickable = Boolean(rest.onClick)

  const ChipComponent = isClickable ? 'button' : 'div'

  return (
    <ChipComponent
      className={clsx(styles.chip, styles[color], {
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
