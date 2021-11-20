import * as React from 'react'
import clsx from 'clsx'
import styles from './Icon.module.css'

interface IconProps {
  className?: string
  children: string
}

export function Icon({ className, children }: IconProps) {

  return (
    <span className={clsx('material-icons-round', styles.icon, className)}>
      {children}
    </span>
  )
}
