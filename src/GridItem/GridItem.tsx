import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface GridItemProps extends React.HTMLProps<HTMLDivElement>{
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  children?: React.ReactNode
}

export function GridItem({
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  children,
  ...rest
}: GridItemProps) {

  return (
    <div
      className={clsx('grid-item', {
        [`xs-${xs}`]: xs,
        [`sm-${sm}`]: sm,
        [`md-${md}`]: md,
        [`lg-${lg}`]: lg,
        [`xl-${xl}`]: xl,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}
