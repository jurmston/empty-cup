import * as React from 'react'
import clsx from 'clsx'
import styles from './Icon.module.css'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'warning' | 'action'
  size?: number
}

export function Icon({ color = 'default', size = 16, children, ...rest }: IconProps) {

  return (
    <svg
      viewBox="0 0 24 24"
      {...rest}
      className={clsx(styles.icon, styles[color], rest.className)}
      style={{
        fontSize: `${size}px`,
        ...rest.style
      }}
      height={size}
      width={size}
    >
      {children}
    </svg>
  )
}
