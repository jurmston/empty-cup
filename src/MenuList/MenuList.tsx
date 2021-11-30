import * as React from 'react'
import styles from './MenuList.module.css'
import { getOwnerDocument } from '../utils/dom'
import Popper, { PopperProps } from '../Popper'
import { useMenu } from '../Menu'
import clsx from 'clsx'


interface MenuListProps {
  children?: React.ReactElement<HTMLLIElement>[]
  containerProps?: React.HTMLProps<HTMLDivElement>
  popperProps?: Partial<PopperProps>
}


function getNextItem(
  list: HTMLUListElement,
  item: HTMLElement,
  childKey: 'firstChild' | 'lastChild',
): HTMLElement {

  if (list === item) {
    return list[childKey] as HTMLElement
  }

  const siblingKey = childKey === 'firstChild'
    ? 'nextElementSibling'
    : 'previousElementSibling'

  if (item && item[siblingKey]) {
    return item[siblingKey] as HTMLElement
  }

  return list[childKey] as HTMLElement
}


function moveFocus(
  list: HTMLUListElement,
  currentFocus: HTMLElement,
  direction = 'forward',
) {
  const childKey = direction === 'forward' ? 'firstChild' : 'lastChild'
  let wrappedOnce = false
  let nextFocus = getNextItem(list, currentFocus, childKey)

  console.log(currentFocus, nextFocus)

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list[childKey]) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    // Casting as a button to pickup the disabled prop. However, the next
    // focus may not be a button element. There is probably a more semantic
    // Typescript way to do this.
    const nextFocusDisabled = (nextFocus as HTMLButtonElement).disabled
      || nextFocus.getAttribute('aria-disabled') === 'true'

    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = getNextItem(list, nextFocus, childKey);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}



export function MenuList({ children, containerProps, popperProps }: MenuListProps) {
  const { listRef, controlRef, isOpen, close } = useMenu()

  const handleListKeyDown: React.KeyboardEventHandler<HTMLUListElement> = event => {
    if (!listRef?.current) {
      return
    }

    const list = listRef.current
    const key = event.key

    const currentFocus = getOwnerDocument(list).activeElement as HTMLElement
    const listIsFocused = list?.contains(currentFocus) ?? false

    if (!listIsFocused) {
      return
    }

    switch (true) {
      case key === 'ArrowDown': {
        moveFocus(list, currentFocus, 'forward')
        break
      }

      case key === 'ArrowUp': {
        moveFocus(list, currentFocus, 'back')
        break
      }

      case key === 'Escape': {
        close()
        controlRef?.current?.focus()
        break
      }

      default: {
        /* Do nothing */
      }

    }
  }

  React.useEffect(
    () => {
      const control = controlRef?.current
      const list = listRef?.current

      if (!control) {
        return
      }

      const handleControlKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          (list?.firstChild as HTMLElement)?.focus()
        }
      }

      control.addEventListener('keydown', handleControlKeyDown)

      return () => {
        control.removeEventListener('keydown', handleControlKeyDown)
      }
    },
    [controlRef, listRef]
  )

  return (
    <Popper
      {...popperProps}
      isOpen={isOpen}
      onClose={close}
      anchor={controlRef?.current as HTMLElement}
      placement={popperProps?.placement ?? 'bottom-start'}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          }
        },
        ...(popperProps?.modifiers ?? []),
      ]}
    >
      <div className={clsx(styles.container, containerProps?.className)} {...containerProps}>
        <ul
          ref={listRef}
          className={styles.menuList}
          onKeyDown={handleListKeyDown}
        >
          {children}
        </ul>
      </div>
    </Popper>

  )
}
