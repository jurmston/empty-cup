import * as React from 'react'
import clsx from 'clsx'
import { LayoutAlignment, LayoutSize } from '../types'
import './styles.css'

interface ContainerProps {
  width?: LayoutSize
  align?: LayoutAlignment
  style?: React.CSSProperties
  children?: React.ReactNode
  disableGutters?: boolean
}

export function Container({
  width = 'md',
  align = 'center',
  style,
  children,
  disableGutters = false,
}: ContainerProps) {

  return (
    <div
      className={clsx('container', width, align, {
        'no-gutters': disableGutters,
      })}
      style={style}
    >
      {children}
    </div>
  )
}
