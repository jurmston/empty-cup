import * as React from 'react'
import { OverrideProps } from '../OverridableComponent'
import clsx from 'clsx'
import useLoadImage from '../useLoadImage'
import styles from './Avatar.module.css'
import PersonIcon from '../icons/PersonRounded'
import useSx, { SxProps } from '../useSx'


export const AvatarClasses = {
  base: 'Genjo-avatar',
  root: 'Genjo-avatar--root',
  image: 'Genjo-avatar--image',
  icon: 'Genjo-avatar--icon',
}


interface AvatarTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    name?: string
    src?: string
    icon?: React.ReactNode
    size?: number
    imgProps?: React.HTMLProps<HTMLImageElement>
    sx?: SxProps
    size?: number
    rounded?: 'full' | number
    rawColor?: string
  }
  defaultComponent: D
}

type AvatarProps<
  D extends React.ElementType = AvatarTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<AvatarTypeMap<P, D>, D>


/**
 * Extracts the first and last initials from a name. If the name is more than
 * two words, the first letter of the first word and the first letter of the
 * last word are used. If just a single word, only the first letter is returned.
 *
 *
 * The results are returned in upper case.
 * Examples: John Smith = 'JS', John von Smith = 'JS, John = 'J'
 */
function getInitials(name: string = ''): string {
  const words = name.toUpperCase().split(' ')

  return words.length > 1
    ? words[0].charAt(0) + words[words.length - 1].charAt(0)
    : words[0].charAt(0)
}


export function Avatar({
  component: AvatarComponent = 'span',
  name = '',
  src,
  srcSet,
  sizes,
  children,
  icon,
  imgProps,
  size = 4,
  rawColor,
  rounded = 'full',
  ...rest
}: AvatarProps) {

  const imageStatus = useLoadImage({ ...imgProps, src, srcSet })
  const hasImage = src || srcSet
  const hasImageAndNotFailing = hasImage && imageStatus !== 'error'

  const computedStyle = {
    backgroundColor: rawColor ?? `var(--palette--default-500)`,
    color: 'var(--palette--white',
    width: `calc(var(--unit) * ${size})`,
    height: `calc(var(--unit) * ${size})`,
    fontSize: `calc(1rem * ${size * 0.25})`,
    borderRadius: rounded === 'full'
      ? '50%'
      : `calc(var(--unit) * ${rounded}) * 0.5`,
  }

  const iconSize = size * 0.3

  const computedChildren = hasImageAndNotFailing ? (
    <img
      {...imgProps}
      alt={name}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      className={clsx(AvatarClasses.image, styles.image, imgProps?.className)}
    />
  ) : icon ? (
    React.cloneElement(icon, {
      className: clsx(AvatarClasses.icon, styles.icon, icon.props?.className),
      size: iconSize,
    })
  ) : name ? (
    getInitials(name)
  ) : (
    <PersonIcon className={clsx(AvatarClasses.icon, styles.icon)} size={iconSize} />
  )

  return (
    <AvatarComponent
      {...rest}
      className={clsx(
        AvatarClasses.root,
        styles.avatar,
        rest?.className,
        Boolean(rest?.onClick) && styles.isClickable,
      )}
      style={{ ...computedStyle, ...rest.style }}
    >
      {computedChildren}
    </AvatarComponent>
  )
}
