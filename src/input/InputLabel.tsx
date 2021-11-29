import * as React from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'


export const InputLabelClasses = {
  root: 'Genjo-input-label',
}


export interface InputLabelProps extends React.HTMLProps<HTMLLabelElement> {
  hasError?: boolean
}

export function InputLabel({
  hasError = false,
  ...rest
}: InputLabelProps) {

  return (
    <label
      {...rest}
      className={clsx(
        InputLabelClasses.root,
        styles.label,
        rest.className,
        hasError && styles.error,
      )}
    />
  )
}
