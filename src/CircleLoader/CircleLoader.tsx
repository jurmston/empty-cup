import * as React from 'react'
import styles from './CircleLoader.module.css'
import clsx from 'clsx'
import { Color } from '../styles'


interface CircleLoaderProps {
  size?: number
  value?: number
  variant?: 'determinate' | 'indeterminate'
  color?: Color
  bgcolor?: Color
}

const SIZE = 44
const VIEW_BOX = `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`
const THICKNESS = 5


export function CircleLoader({
  size = 40,
  value = 0,
  variant = 'indeterminate',
  color = 'primary',
  bgcolor = 'default-200',
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

  circleStyle.stroke = `var(--palette--${color})`

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
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - THICKNESS) / 2}
          fill="none"
          strokeWidth={THICKNESS}
          style={{
            stroke: `var(--palette--${bgcolor})`,
          }}
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
