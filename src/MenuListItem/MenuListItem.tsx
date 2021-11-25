import * as React from 'react'
import styles from './MenuListItem.module.css'
import useEnhancedEffect from '../useEnhancedEffect'
import clsx from 'clsx'


interface MenuListItemProps {
  children?: React.ReactNode
  autoFocus?: boolean
  isSelected?: boolean
  isDisabled?: boolean
}

export function MenuListItem({
  children,
  isSelected = false,
  autoFocus = false,
  isDisabled = false,
}: MenuListItemProps) {
  const ref = React.useRef<HTMLLIElement>(null)

  // Auto-focus the first element of the list.
  useEnhancedEffect(
    () => {
      if (autoFocus) {
        ref.current?.focus()
      }
    },
    [autoFocus]
  )

  return (
    <li
      className={clsx(styles.menuListItem, {
        [styles.isSelected]: isSelected,
        [styles.isDisabled]: isDisabled,
      })}
      role="menuitem"
      tabIndex={isDisabled ? -1 : 0}
      ref={ref}
      aria-disabled={isDisabled}
    >
      {children}
    </li>
  )
}
