import * as React from 'react'
import { safeDivide } from '../utils'
import './styles.css'

interface AspectRatioBoxProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  aspectRatio?: number
}


/**
 * Div container with a fixed aspect ratio.
 */
export function AspectRatioBox({
  children,
  aspectRatio = 1,
  ...rest
}: AspectRatioBoxProps) {

  const paddingTop = React.useMemo(
    () => {
      const inverseAspectRatio = safeDivide(1, aspectRatio)
      return `${inverseAspectRatio * 100}%`
    },
    [aspectRatio]
  )

  return (
    <div
      className="aspect-ratio-box-wrapper"
      style={{ paddingTop }}
    >
      <div
        className="aspect-ratio-box-inner"
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}
