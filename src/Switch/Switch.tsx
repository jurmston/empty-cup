import * as React from 'react'
import clsx from 'clsx'
import { ThemeColor } from '../types'
import styles from './Switch.module.css'


interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
  color?: ThemeColor
  label?: string
}


export function Switch({ id, className, label, color = 'default', ...rest }: SwitchProps) {
  return (
    <span className={styles.switch}>
      <input
        id={id}
        type="checkbox"
        className={clsx(styles.input, className)}
        {...rest}
      />

      <span
        className={clsx(styles.track, styles[color])}
      >
        <span className={styles.knob} />
      </span>

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
