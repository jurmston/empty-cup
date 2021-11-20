import * as React from 'react'
import clsx from 'clsx'
import styles from 'Select.module.css'

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  disableFullWidth?: boolean
  endAdornment?: React.ReactNode
  error?: boolean
  filled?: boolean
  hideLabel?: boolean
  id?: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  orientation?: 'horizontal' | 'vertical'
  startAdornment?: React.ReactNode
  value?: any
  variant?: 'default' | 'pill'
  options?: string[]
}

export function Select({
  error = false,
  value,
  onChange,
  disableFullWidth = false,
  startAdornment: startAdornmentFromProps,
  endAdornment: endAdornmentFromProps,
  label: labelFromProps = '',
  id = '',
  hideLabel = false,
  orientation = 'horizontal',
  variant = 'default',
  filled = false,
  options = [],
  ...rest
}: SelectProps) {

  const ref = React.useRef<HTMLSelectElement>(null)

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    ref.current?.focus()
  }

  const startAdornment = startAdornmentFromProps && (
    <span className={clsx('adornment', 'start-adornment')}>
      {startAdornmentFromProps}
    </span>
  )

  const labelEl = (
    <label
      className={clsx('label', {
        error,
        hidden: hideLabel,
      })}
      htmlFor={id}
    >
      {labelFromProps}
    </label>
  )

  return (
    <div
      className={clsx('select-wrapper', {
        vertical: orientation === 'vertical',
      })}
    >
      {labelEl}
      <div
        onClick={handleClick}
        className={clsx('select', {
          error,
          filled,
          'variant-pill': variant === 'pill',
          'full-width': !disableFullWidth,
        })}
      >
        {startAdornment}
        <select
          {...rest}
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
        >
          {options.map(option => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
