import * as React from 'react'
import clsx from 'clsx'
import styles from './Icon.module.css'
import { Color } from '../styles'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  color?: Color
  size?: number
}

export function Icon({ color = 'default', size = 1, children, ...rest }: IconProps) {

  return (
    <svg
      viewBox="0 0 24 24"
      {...rest}
      className={clsx(styles.icon, rest.className)}
      style={{
        fontSize: `calc(1rem * ${size})`,
        height: `calc(1rem * ${size})`,
        width: `calc(1rem * ${size})`,
        color: `var(--palette--${color})`,
        ...rest.style
      }}
    >
      {children}
    </svg>
  )
}
