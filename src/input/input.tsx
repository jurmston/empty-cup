import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface InputProps {
  error?: boolean
  required?: boolean
}

export function Input({ error, ...props }: InputProps) {



  return (
    <input
      className={clsx({
        error,
      })}
      {...props}
    />
  )
}
