import * as React from 'react'
import clsx from 'clsx'
import styles from './Checkbox.module.css'
import { Palette } from '../styles'


interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  palette?: Palette
  label?: string
}


export function Checkbox({ id, label, palette = 'default', ...rest }: CheckboxProps) {
  return (
    <span className={styles.checkbox}>
      <input
        id={id}
        type="checkbox"
        className={clsx(styles.input)}
        {...rest}
      />

      <span
        style={{ backgroundColor: `var(--palette--${palette})`}}
        className={styles.checkboxIcon}
      />

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
