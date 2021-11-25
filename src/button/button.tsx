import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'
import { ThemeColor } from '../types'
import { OverrideProps } from '../OverridableComponent'


interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & {
    color?: ThemeColor
    variant?: 'text' | 'contained' | 'outlined' | 'link'
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
  }
  defaultComponent: D
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    component: ButtonComponent = 'button',
    color = 'default',
    variant = 'text',
    startIcon: startIconFromProps,
    endIcon: endIconFromProps,
    children,
    ...rest
  } = props

  const startIcon = startIconFromProps && (
    <span className={clsx(styles.icon, styles.startIcon)}>
      {startIconFromProps}
    </span>
  )

  const endIcon = endIconFromProps && (
    <span className={clsx(styles.icon, styles.endIcon)}>
      {endIconFromProps}
    </span>
  )

  return (
    <ButtonComponent
      {...rest}
      ref={ref}
      className={clsx(styles.button, styles[color], styles[variant])}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonComponent>
  )
})
