import * as React from 'react'
import clsx from 'clsx'
import { OverrideProps } from '../OverridableComponent'


interface StackTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    gap?: number
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit'
  }
  defaultComponent: D
}

type StackProps<
  D extends React.ElementType = StackTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<StackTypeMap<P, D>, D>


export function Stack({
  component: StackComponent = 'div',
  gap = 0,
  direction = 'column',
  wrap = 'wrap',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  ...rest
}: StackProps) {

  return (
    <StackComponent
      {...rest}
      style={{
        display: 'flex',
        gap: `calc(var(--unit) * ${gap})`,
        flexDirection: direction,
        flexWrap: wrap,
        alignItems,
        justifyContent,
        ...rest.style
      }}
    />
  )
}
