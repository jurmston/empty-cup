import * as React from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'


export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  disableFullWidth?: boolean
  endAdornment?: React.ReactNode
  error?: boolean
  filled?: boolean
  hideLabel?: boolean
  id?: string
  label?: string
  orientation?: 'horizontal' | 'vertical'
  startAdornment?: React.ReactNode
  variant?: 'default' | 'pill',
  endAddOn?: React.ReactNode
}

export function Input({
  error = false,
  disableFullWidth = false,
  startAdornment: startAdornmentFromProps,
  endAdornment: endAdornmentFromProps,
  label: labelFromProps = '',
  id = '',
  hideLabel = false,
  orientation = 'horizontal',
  variant = 'default',
  filled = false,
  endAddOn,
  ...inputProps
}: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false)
  const ref = React.useRef<HTMLInputElement>(null)

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    ref.current?.focus()
  }

  const startAdornment = startAdornmentFromProps && (
    <span className={clsx(styles.adornment, styles.startAdornment)}>
      {startAdornmentFromProps}
    </span>
  )

  const endAdornment = endAdornmentFromProps && (
    <span className={clsx(styles.adornment, styles.endAdornment)}>
      {endAdornmentFromProps}
    </span>
  )

  const labelEl = (
    <label
      className={clsx(styles.label, {
        [styles.error]: error,
        [styles.hidden]: hideLabel,
      })}
      htmlFor={id}
    >
      {labelFromProps}
    </label>
  )

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true)
    inputProps?.onFocus?.(event)
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(false)
    inputProps?.onBlur?.(event)
  }

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.vertical]: orientation === 'vertical',
      })}
    >
      {labelEl}
      <div
        onClick={handleClick}
        className={clsx(styles.input, {
          [styles.error]: error,
          [styles.filled]: filled,
          [styles.pill]: variant === 'pill',
          [styles.fullWidth]: !disableFullWidth,
          [styles.isFocused]: isFocused,
        })}
      >
        <div className={styles.inputInner}>
          {startAdornment}
          <input
            {...inputProps}
            id={id}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {endAdornment}
        </div>

        {endAddOn}
      </div>
    </div>
  )
}
