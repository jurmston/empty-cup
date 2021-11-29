import * as React from 'react'
import styles from './Switch.module.css'
import { Color } from '../styles'

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
  color?: Color
  label?: string
}


export function Switch({ id, className, label, color = 'primary', ...rest }: SwitchProps) {
  const computedStyle = {
    '--switch--color': `var(--palette--${color})`
  }

  return (
    <span className={styles.switch} style={computedStyle as any}>
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        {...rest}
      />

      <span
        className={styles.track}
      >
        <span className={styles.knob} />
      </span>

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
