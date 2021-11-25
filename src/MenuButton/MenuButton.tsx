import * as React from 'react'

import { useMenu } from '../Menu'
import Button, { ButtonProps } from '../Button'


/**
 *
 */
export function MenuButton(props: ButtonProps) {
  const { listRef, controlRef, isOpen, open, toggle } = useMenu()

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    toggle()

    if (props?.onClick) {
      props.onClick(event)
    }
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = event => {
    const key = event.key

    switch (true) {
      case key === 'ArrowDown': {
        if (!isOpen) {
          open()
        } else if (listRef?.current?.firstChild) {
          (listRef.current.firstChild as HTMLElement)?.focus()
        }

        break
      }

      case key === 'ArrowUp': {
        if (!isOpen) {
          open()
        } else if (listRef?.current?.lastChild) {
          (listRef.current.lastChild as HTMLElement)?.focus()
        }

        break
      }

      default: {
        /* Do nothing */
      }
    }

    if (props.onKeyDown) {
      props.onKeyDown(event)
    }
  }

  return (
    <Button
      {...props}
      ref={controlRef}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    />
  )
}
