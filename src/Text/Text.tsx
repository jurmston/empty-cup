import * as React from 'react'
import clsx from 'clsx'
import styles from './Text.module.css'
import { OverrideProps } from '../OverridableComponent'
import { ThemeColor } from '../types'


interface TextTypeMap<P = {}, D extends React.ElementType = 'p'> {
  props: P & {
    color: ThemeColor | 'textDisabled' | 'textSecondary'
    strong: boolean
    emphasis: boolean
  }
  defaultComponent: D
}

type TextProps<
  D extends React.ElementType = TextTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TextTypeMap<P, D>, D>


export function Text({
  component: TextComponent = 'p',
  color = 'textPrimary',
  strong =  false,
  emphasis = false,
  caption = false,
  link = false,
  children,
  ...rest
}: TextProps) {
  let wrappedChildren = emphasis ? <em>{children}</em> : children
  wrappedChildren = strong ? <strong>{wrappedChildren}</strong> : wrappedChildren

  return (
    <TextComponent
      {...rest}
      className={clsx(styles.text, styles[color], {
        [styles.caption]: caption,
        [styles.link]: link,
      })}
    >
      {wrappedChildren}
    </TextComponent>
  )
}
