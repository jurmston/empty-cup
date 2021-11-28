import * as React from 'react'
import { OverrideProps } from '../OverridableComponent'
import useSx, { SxProps } from '../useSx'


interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    sx?: SxProps
  }
  defaultComponent: D
}

type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BoxTypeMap<P, D>, D>

export function Box({
  component: BoxComponent = 'div',
  sx,
  ...rest
}: BoxProps) {
  const computedStyles = useSx(sx)

  return (
    <BoxComponent
      {...rest}
      style={{
        ...computedStyles,
        ...rest.style,
      }}
    />
  )
}
