import * as React from 'react'
import { classicNameResolver } from 'typescript'
import styles from './CircleLoader.module.css'
import clsx from 'clsx'


interface CircleLoaderProps {
  size?: number
  value?: number
  variant?: 'determinate' | 'indeterminate'
  color?: string
}

const SIZE = 44
const VIEW_BOX = `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`
const THICKNESS = 5


export function CircleLoader({
  size = 40,
  value = 0,
  variant = 'indeterminate',
  color = 'primary',
}: CircleLoaderProps) {

  const circleStyle: Partial<React.CSSProperties> = {}
  const rootStyle: Partial<React.CSSProperties> = {}
  const rootProps: Partial<React.HTMLProps<HTMLSpanElement>> = {}

  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - THICKNESS) / 2)
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = `${(((100 - value) / 100) * circumference).toFixed(3)}px`;
    rootStyle.transform = 'rotate(-90deg)';
  }

  circleStyle.stroke = `var(--colors-${color})`

  return (
    <span
      className={clsx(
        styles.root,
        styles[variant],
      )}
      style={{ height: size, width: size, ...rootStyle }}
      {...rootProps}
    >
      <svg
        className={styles.svg}
        viewBox={VIEW_BOX}
      >
        <circle
          className={styles.backgroundCircle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - THICKNESS) / 2}
          fill="none"
          strokeWidth={THICKNESS}
        />

        <circle
          style={circleStyle}
          className={styles.progressCircle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - THICKNESS) / 2}
          fill="none"
          strokeWidth={THICKNESS}
        />
      </svg>
    </span>
  )
}
