import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface InputProps {
  disableFullWidth?: boolean
  endAdornment?: React.ReactNode
  error?: boolean
  filled?: boolean
  hideLabel?: boolean
  id?: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  orientation?: 'horizontal' | 'vertical'
  placeholder?: string
  required?: boolean
  startAdornment?: React.ReactNode
  value?: any
  variant?: 'default' | 'pill'
}

export function Input({
  error = false,
  value,
  onChange,
  required = false,
  disableFullWidth = false,
  startAdornment: startAdornmentFromProps,
  endAdornment: endAdornmentFromProps,
  label: labelFromProps = '',
  id = '',
  hideLabel = false,
  orientation = 'horizontal',
  variant = 'default',
  placeholder = '',
  filled = false,
  ...inputProps
}: InputProps) {

  const ref = React.useRef<HTMLInputElement>(null)

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    ref.current?.focus()
  }

  const startAdornment = startAdornmentFromProps && (
    <span className={clsx('adornment', 'start-adornment')}>
      {startAdornmentFromProps}
    </span>
  )

  const endAdornment = endAdornmentFromProps && (
    <span className={clsx('adornment', 'end-adornment')}>
      {endAdornmentFromProps}
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
      className={clsx('input-wrapper', {
        vertical: orientation === 'vertical',
      })}
    >
      {labelEl}
      <div
        onClick={handleClick}
        className={clsx('input', {
          error,
          filled,
          'variant-pill': variant === 'pill',
          'full-width': !disableFullWidth,
        })}
      >
        {startAdornment}
        <input
          {...inputProps}
          id={id}
          ref={ref}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {endAdornment}
      </div>
    </div>
  )
}
