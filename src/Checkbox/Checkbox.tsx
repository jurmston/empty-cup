import * as React from 'react'
import clsx from 'clsx'
import styles from './Checkbox.module.css'
import { Palette } from '../styles'


interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  palette?: Palette
  label?: string
}


export function Checkbox({ id, label, palette = 'primary', ...rest }: CheckboxProps) {
  return (
    <span className={styles.checkbox}>
      <input
        id={id}
        type="checkbox"
        className={clsx(styles.input)}
        {...rest}
      />

      <span
        style={{
          '--checkbox--checked-color': `var(--palette--${palette})`
        } as any}
        className={styles.checkboxIcon}
      />

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
