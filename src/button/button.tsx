import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'
import { ThemeColor, Color } from '../types'
import { OverrideProps } from '../OverridableComponent'
import Pressable from '../Pressable'


type ButtonVariant = 'text' | 'contained' | 'outlined' | 'link'


interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & {
    color?: ThemeColor | Color
    variant?: ButtonVariant
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
  }
  defaultComponent: D
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>


interface ButtonStyles {
  '--button--color': string
  '--button--hover-bg': string
  '--button--bg': string
  '--button--active-bg': string
  '--button--border': string
}


function composeButtonStyles(
  color: ThemeColor | Color,
  variant: ButtonVariant,
): ButtonStyles {

  switch (variant) {
    case 'contained': {
      return {
        '--button--color': `var(--colors-white)`,
        '--button--bg': `var(--colors-${color}-500)`,
        '--button--hover-bg': `var(--colors-${color}-600)`,
        '--button--active-bg': `var(--colors-${color}-700)`,
        '--button--border': 'transparent',
      }
    }

    case 'outlined': {
      return {
        '--button--color': `var(--colors-${color}-500)`,
        '--button--bg': 'var(--colors-white',
        '--button--hover-bg': `var(--colors-${color}-50)`,
        '--button--active-bg': `var(--colors-${color}-100)`,
        '--button--border': `var(--colors-${color}-300)`,
      }
    }

    default: {
      return {
        '--button--color': `var(--colors-${color}-500)`,
        '--button--bg': 'transparent',
        '--button--hover-bg': `var(--colors-${color}-50)`,
        '--button--active-bg': `var(--colors-${color}-100)`,
        '--button--border': 'transparent',
      }
    }
  }
}


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    component: ButtonComponent = 'button',
    color = 'primary',
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

  const buttonStyles = React.useMemo(
    () => composeButtonStyles(color, variant),
    [color, variant]
  )

  return (
    <ButtonComponent
      {...rest}
      ref={ref}
      className={clsx(styles.button, styles[variant])}
      style={buttonStyles}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonComponent>
  )
})
