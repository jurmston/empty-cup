import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface IconProps {
  className?: string
  children: string
}

export function Icon({ className, children }: IconProps) {

  return (
    <span className={clsx('material-icons-round', 'icon', className)}>
      {children}
    </span>
  )
}
