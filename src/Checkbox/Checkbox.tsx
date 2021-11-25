import * as React from 'react'
import clsx from 'clsx'
import { ThemeColor } from '../types'
import styles from './Checkbox.module.css'


interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  color?: ThemeColor
  label?: string
}


export function Checkbox({ id, label, color = 'default', ...rest }: CheckboxProps) {
  return (
    <span className={styles.checkbox}>
      <input
        id={id}
        type="checkbox"
        className={clsx(styles.input)}
        {...rest}
      />

      <span
        className={clsx(styles.checkboxIcon, styles[color])}
      />

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
