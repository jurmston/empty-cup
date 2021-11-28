import * as React from 'react'
import clsx from 'clsx'
import styles from './InputAddOn.module.css'
import { OverrideProps } from '../OverridableComponent'


export const InputAddOnClasses = {
  root: 'Genjo-input-add-on',
}

interface InputAddOnTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    position?: 'right' | 'left'
  }
  defaultComponent: D
}

type InputAddOnProps<
  D extends React.ElementType = InputAddOnTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<InputAddOnTypeMap<P, D>, D>


export function InputAddOn({
  position = 'right',
  ...rest
}: InputAddOnProps) {

  const isClickable = Boolean(rest.onClick)
  const InputAddOnComponent = isClickable ? 'button' : 'div'

  return (
    <InputAddOnComponent
      {...rest}
      className={clsx(InputAddOnClasses.root, styles.addOn, {
        [styles.isClickable]: isClickable,
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    />
  )
}
