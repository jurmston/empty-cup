import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'
import { OverridableComponent, OverrideProps } from '../OverridableComponent'
import { Palette } from '../styles/colors'


export const ButtonClasses = {
  root: 'Genjo-button',
  icon: 'Genjo-button--icon',
  startIcon: 'Genjo-button--start-icon',
  endIcon: 'Genjo-button--end-icon',
}


export type ButtonVariant = 'text' | 'contained' | 'outlined' | 'link'
export const BUTTON_VARIANTS: ButtonVariant[] = ['text', 'contained', 'outlined', 'link']


export interface ButtonOptions {
  /**
   * Palette for the button.
   */
    palette?: Palette
    /**
    * Variant display for the button.
    */
    variant?: ButtonVariant
    /**
    * Icon that appears at the start of the button.
    */
    startIcon?: React.ReactNode
    /**
    * Icon that appears at the end of the button.
    */
    endIcon?: React.ReactNode
}


interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & ButtonOptions
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
  palette: string,
  variant: ButtonVariant,
): ButtonStyles {

  switch (variant) {
    case 'contained': {
      return {
        '--button--color': `var(--palette--white)`,
        '--button--bg': `var(--palette--${palette}-500)`,
        '--button--hover-bg': `var(--palette--${palette}-600)`,
        '--button--active-bg': `var(--palette--${palette}-700)`,
        '--button--border': 'transparent',
      }
    }

    case 'outlined': {
      return {
        '--button--color': `var(--palette--${palette}-500)`,
        '--button--bg': 'var(--palette--white',
        '--button--hover-bg': `var(--palette--${palette}-50)`,
        '--button--active-bg': `var(--palette--${palette}-100)`,
        '--button--border': `var(--palette--${palette}-300)`,
      }
    }

    default: {
      return {
        '--button--color': `var(--palette--${palette}-500)`,
        '--button--bg': 'transparent',
        '--button--hover-bg': `var(--palette--${palette}-50)`,
        '--button--active-bg': `var(--palette--${palette}-100)`,
        '--button--border': 'transparent',
      }
    }
  }
}


export const Button = React.forwardRef<OverridableComponent<ButtonTypeMap>, ButtonProps>(function Button(props, ref) {
  const {
    component: ButtonComponent = 'button',
    palette = 'primary',
    variant = 'text',
    startIcon: startIconFromProps,
    endIcon: endIconFromProps,
    children,
    ...rest
  } = props

  const startIcon = startIconFromProps && (
    <span
      className={clsx(
        ButtonClasses.icon,
        ButtonClasses.startIcon,
        styles.icon,
        styles.startIcon,
      )}
    >
      {startIconFromProps}
    </span>
  )

  const endIcon = endIconFromProps && (
    <span
      className={clsx(
        ButtonClasses.icon,
        ButtonClasses.endIcon,
        styles.icon,
        styles.endIcon,
      )}
    >
      {endIconFromProps}
    </span>
  )

  const buttonStyles = React.useMemo(
    () => composeButtonStyles(palette, variant),
    [palette, variant]
  )

  return (
    <ButtonComponent
      {...rest}
      ref={ref}
      className={clsx(ButtonClasses.root, styles.root, styles[variant])}
      style={buttonStyles}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonComponent>
  )
})
