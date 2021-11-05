import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  variant?: 'raised' | 'outlined'
}

export function Card({ children, variant = 'raised', ...rest }: CardProps) {

  return (
    <div
      {...rest}
      className={clsx('card', {
        raised: variant === 'raised',
        outlined: variant === 'outlined',
      })}
    >
      {children}
    </div>
  )
}
