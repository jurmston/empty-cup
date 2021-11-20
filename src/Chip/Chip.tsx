import * as React from 'react'
import clsx from 'clsx'
import styles from 'Chip.module.css'


interface ChipProps {
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  color: 'red' | 'pink' | 'purple' | 'deep-purple' | 'indigo' | 'blue' | 'light-blue' | 'cyan' | 'teal' | 'green' | 'light-green' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deep-orange' | 'brown' | 'grey' | 'blue-grey'
}

const COLOR_VARIANT_MAP = {
  red: 700,
  pink: 700,
  purple: 700,
  'deep-purple': 700,
  indigo: 700,
  blue: 700,
  'light-blue': 700,
  cyan: 700,
  teal: 700,
  green: 700,
  'light-green': 800,
  lime: 900,
  yellow: 900,
  amber: 900,
  orange: 700,
  'deep-orange': 700,
  brown: 700,
  grey: 700,
  'blue-grey': 700,
}

export function Chip({
  children,
  color = 'grey',
  startIcon: startIconFromProps,
  endIcon: endIconFromProps,
}: ChipProps) {

  const colorVariant = COLOR_VARIANT_MAP[color]

  const colorStyleProps = {
    backgroundColor: `var(--colors-${color}-100`,
    color: `var(--colors-${color}-${colorVariant})`,
    borderColor: `var(--colors-${color}-200)`,
  }

  const startIcon = startIconFromProps && (
    <span className={clsx('icon', 'start-icon')}>
      {startIconFromProps}
    </span>
  )

  const endIcon = endIconFromProps && (
    <span className={clsx('icon', 'end-icon')}>
      {endIconFromProps}
    </span>
  )

  return (
    <div className="chip" style={colorStyleProps}>
      {startIcon}
      <span>
        {children}
      </span>
      {endIcon}
    </div>
  )
}
