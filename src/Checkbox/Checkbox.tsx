import * as React from 'react'
import clsx from 'clsx'
import { nanoid } from 'nanoid'
import { Color } from '../types'
import './styles.css'

interface CheckboxProps extends React.HTMLProps<HTMLInputElement>{
  color?: Color | 'primary' | 'secondary'
  label?: string
}

export function Checkbox({ label, color, checked, onChange, ...rest }: CheckboxProps) {
  const [id, ] = React.useState(() => nanoid())

  return (
    <span className="checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
        {...rest}
      />

      <span
        className={clsx('checkbox-icon', {
          checked,
        })}
      />

      <label htmlFor={id}>
        {label}
      </label>
    </span>
  )
}
