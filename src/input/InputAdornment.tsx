import * as React from 'react'
import clsx from 'clsx'
import styles from './InputAdornment.module.css'


export type InputAdornmentPosition = 'start' | 'end'


export interface InputAdornmentProps {
  children: React.ReactNode
  position: InputAdornmentPosition
}


export function InputAdornment({
  children,
  position,
}: InputAdornmentProps) {

  return (
    <span
      className={clsx(
        styles.adornment,
        styles[position],
      )}
    >
      {children}
    </span>
  )
}
