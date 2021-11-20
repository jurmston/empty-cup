import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'


interface ButtonProps {
  children?: React.ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
  variant?: 'text' | 'contained' | 'outlined' | 'link'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
}


export function Button({
  children,
  color = 'default',
  variant = 'text',
  startIcon: startIconFromProps,
  endIcon: endIconFromProps,
  disabled = false,
}: ButtonProps) {

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
    <button
      className={clsx(styles.button, styles[color], styles[variant])}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
