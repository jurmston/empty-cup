import * as React from 'react'
import clsx from 'clsx'
import styles from './AddOn.module.css'
import { OverrideProps } from '../OverridableComponent'


interface AddOnTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    position?: 'right' | 'left'
  }
  defaultComponent: D
}

type AddOnProps<
  D extends React.ElementType = AddOnTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<AddOnTypeMap<P, D>, D>


export function AddOn({
  component: AddOnComponent = 'div',
  position = 'right',
  ...rest
}: AddOnProps) {

  return (
    <AddOnComponent
      {...rest}
      className={clsx(styles.addOn, {
        [styles.clickable]: Boolean(rest.onClick),
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    />
  )
}
