import * as React from 'react'
import clsx from 'clsx'
import styles from './Text.module.css'
import { OverrideProps } from '../OverridableComponent'
import { Color } from '../styles'


export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'caption'

export const textVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'body',
  'caption',
]

export type TextWeight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black'

export type TextWeightMapping = { [key in TextWeight]: number}
export const textWeightMapping: TextWeightMapping = {
  'thin': 100,
  'extra-light': 200,
  light: 300,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900,
}


export type TextTracking =
  | 'tightest'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'

export type TextTrackingMapping = { [key in TextTracking]: string }
export const textTrackingMapping  = {
  tightest: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

export type TextLeading =
  | 'none'
  | 'tight'
  | 'snug'
  | 'normal'
  | 'relaxed'
  | 'loose'

export type TextLeadingMapping = { [key in TextLeading]: number }
export const textLeadingMapping = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
}


export interface TextOptions {
  color?: Color
  strong?: boolean
  emphasis?: boolean
  size?: number
  variant?: TextVariant
  weight?: TextWeight
  tracking?: TextTracking
  leading?: TextLeading
}


export interface TextTypeMap<P = {}, D extends React.ElementType = 'p'> {
  props: P & TextOptions
  defaultComponent: D
}

export type TextProps<
  D extends React.ElementType = TextTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TextTypeMap<P, D>, D>


interface TextVariantMapping {
  component?: string
  weight?: TextWeight
  tracking?: TextTracking
  leading?: TextLeading
  size?: number
}

type DefaultVariantMapping = {
  [key in TextVariant]: TextVariantMapping
}

const defaultVariantMapping: DefaultVariantMapping = {
  h1: {
    component: 'h1',
    weight: 'black',
    tracking: 'tight',
    leading: 'tight',
    size: 2.4,
  },
  h2: {
    component: 'h2',
    weight: 'extra-bold',
    tracking: 'tight',
    leading: 'tight',
    size: 1.7,
  },
  h3: {
    component: 'h3',
    weight: 'bold',
    tracking: 'tight',
    leading: 'tight',
    size: 1.25,
  },
  h4: {
    component: 'h4',
    weight: 'semi-bold',
    tracking: 'tight',
    leading: 'tight',
    size: 1.15,
  },
  h5: {
    component: 'h5',
    weight: 'semi-bold',
    tracking: 'tight',
    leading: 'tight',
    size: 1.05,
  },
  h6: {
    component: 'h6',
    weight: 'medium',
    tracking: 'tight',
    leading: 'tight',
    size: 1,
  },
  body: {
    component: 'p',
    weight: 'normal',
    tracking: 'normal',
    leading: 'normal',
    size: 1,
  },
  caption: {
    component: 'span',
    weight: 'normal',
    tracking: 'normal',
    leading: 'normal',
    size: 0.75,
  },
}

export function Text({
  component,
  color = 'text-primary',
  variant = 'body',
  weight,
  tracking,
  leading,
  strong =  false,
  emphasis = false,
  link = false,
  size,
  children,
  style,
  ...rest
}: TextProps) {
  let wrappedChildren = emphasis ? <em>{children}</em> : children
  wrappedChildren = strong ? <strong>{wrappedChildren}</strong> : wrappedChildren

  const variantOptions: TextVariantMapping = defaultVariantMapping[
    variant as TextVariant
  ]

  const computedStyle = {
    color: `var(--palette--${color})`,
    fontSize: `calc(1rem * ${size || variantOptions.size})`,
    fontWeight: textWeightMapping[(weight || variantOptions.weight) as TextWeight],
    letterSpacing: textTrackingMapping[(tracking || variantOptions.tracking) as TextTracking],
    lineHeight: textLeadingMapping[(leading || variantOptions.leading) as TextLeading],
  }

  const TextComponent = component || variantOptions.component

  return (
    <TextComponent
      {...rest}
      style={{ ...computedStyle, ...style}}
      className={clsx(styles.text, {
        [styles.link]: link,
      })}
    >
      {wrappedChildren}
    </TextComponent>
  )
}
