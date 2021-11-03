import * as React from 'react'
import clsx from 'clsx'
import './styles.css'


interface ButtonProps {
  children?: React.ReactNode
  color?: 'default' | 'primary' | 'secondary'
  variant?: 'text' | 'contained'
  startIcon?: string
  endIcon?: string
}


export function Button({
  children,
  color = 'default',
  variant = 'text',
  startIcon: startIconFromProps = '',
  endIcon: endIconFromProps = '',
  ...props
}: ButtonProps) {

  const startIcon = startIconFromProps && (
    <span className={clsx('material-icons-round', 'icon', 'start-icon')}>
      {startIconFromProps}
    </span>
  )

  const endIcon = endIconFromProps && (
    <span className={clsx('material-icons-round', 'icon', 'end-icon')}>
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
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
