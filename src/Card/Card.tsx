import * as React from 'react'
import clsx from 'clsx'
import styles from './Card.module.css'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  variant?: 'raised' | 'outlined'
}

export function Card({ children, variant = 'raised', ...rest }: CardProps) {

  return (
    <div
      {...rest}
      className={clsx(styles.card, {
        [styles.raised]: variant === 'raised',
        [styles.outlined]: variant === 'outlined',
      })}
    >
      {children}
    </div>
  )
}
