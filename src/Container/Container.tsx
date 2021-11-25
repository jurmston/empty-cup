import * as React from 'react'
import clsx from 'clsx'
import { OverrideProps } from '../OverridableComponent'
import { LayoutAlignment, LayoutSize } from '../types'
import styles from './Container.module.css'


interface ContainerTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component.
     */
     width?: LayoutSize
     align?: LayoutAlignment
     disableGutters?: boolean
  }
  defaultComponent: D
}


type ContainerProps<
  D extends React.ElementType = ContainerTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ContainerTypeMap<P, D>, D>


export function Container({
  component: ContainerComponent = 'div',
  width = 'md',
  align = 'center',
  disableGutters = false,
  ...rest
}: ContainerProps) {

  return (
    <ContainerComponent
      {...rest}
      className={clsx(
        rest.className,
        styles.container,
        styles[width],
        styles[align],
        {
          [styles.noGutters]: disableGutters,
        },
      )}
    />
  )
}
