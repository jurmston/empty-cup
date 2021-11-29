import * as React from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'
import { InputLabel } from './InputLabel'



export type InputLabelOrientation = 'horizontal' | 'vertical'
export const LABEL_ORIENTATIONS: InputLabelOrientation[] = ['horizontal', 'vertical']

export type InputVariant = 'default' | 'pill'
export const INPUT_VARIANTS: InputVariant[] = ['default', 'pill']

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  disableFullWidth?: boolean
  endAdornment?: React.ReactNode
  error?: boolean
  filled?: boolean
  hideLabel?: boolean
  id?: string
  label?: string
  orientation?: InputLabelOrientation
  startAdornment?: React.ReactNode
  variant?: InputVariant,
  endAddOn?: React.ReactNode
  startAddOn?: React.ReactNode
  labelProps?: React.HTMLProps<HTMLLabelElement>
}

export function Input({
  error = false,
  disableFullWidth = false,
  startAdornment,
  endAdornment,
  label: labelFromProps = '',
  id = '',
  hideLabel = false,
  orientation = 'horizontal',
  variant = 'default',
  filled = false,
  endAddOn,
  startAddOn,
  labelProps,
  ...inputProps
}: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false)
  const ref = React.useRef<HTMLInputElement>(null)

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    ref.current?.focus()
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(true)
    inputProps?.onFocus?.(event)
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setIsFocused(false)
    inputProps?.onBlur?.(event)
  }

  const label = !hideLabel && Boolean(labelFromProps) && (
    <InputLabel
      {...labelProps}
      htmlFor={id}
      hasError={error}
    >
      {labelFromProps}
    </InputLabel>

  )

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.vertical]: orientation === 'vertical',
      })}
    >
      {label}
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
        {startAddOn}

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
