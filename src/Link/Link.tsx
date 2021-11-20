import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface LinkProps extends React.HTMLProps<HTMLAnchorElement | HTMLButtonElement> {
  component?: React.FunctionComponent | string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export function Link({
  component: LinkComponent = 'a',
  children,
  startIcon,
  endIcon,
  ...rest
}: LinkProps) {

  return (
    <LinkComponent
      {...rest}
      className={clsx('link', {

      })}
    >
      {Boolean(startIcon) && <span className="start-icon">{startIcon}</span> }
      {children}
      {Boolean(endIcon) && <span className="end-icon">{endIcon}</span> }
    </LinkComponent>
  )
}
