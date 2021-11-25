import * as React from 'react'


interface OpenableHandlers {
  open: () => void
  close: () => void
  toggle: (value: boolean | undefined) => void
}

type Openable = [boolean, OpenableHandlers]


/**
 * Utility hook to manage something that opens and closes.
 *
 * Inspired by Kyle Shevlin:
 * https://kyleshevlin.com/prefer-function-updaters-in-state-setters
 */
export function useOpenable(initialState = false): Openable {
  const [isOpen, setIsOpen] = React.useState(initialState)

  const handlers = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: (newValue?: boolean) => setIsOpen(
      currentValue => newValue === undefined
        ? !currentValue
        : newValue
    ),
  }

  return [isOpen, handlers]
}
