import * as React from 'react'
import clsx from 'clsx'
import './styles.css'


interface ButtonProps {
  children?: React.ReactNode
  color?: 'default' | 'primary' | 'secondary'
  variant?: 'text' | 'contained'
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
    <span className={clsx('icon', 'start-icon')}>
      {startIconFromProps}
    </span>
  )

  const endIcon = endIconFromProps && (
    <span className={clsx('icon', 'end-icon')}>
      {endIconFromProps}
    </span>
  )

  return (
    <button
      className={clsx({
        primary: color === 'primary',
        secondary: color === 'secondary',
        contained: variant === 'contained',
      })}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
