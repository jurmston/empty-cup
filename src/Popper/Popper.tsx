import * as React from 'react'
import { createPopper, Options } from '@popperjs/core'
import styles from './Popper.module.css'
import Portal from '../Portal'
import useClickAway from '../useClickAway'


interface PopperTooltipProps {
  children: React.ReactElement<HTMLDivElement>
  anchor: HTMLElement | null
  isOpen: boolean
  placement: Options['placement']
  modifiers: Options['modifiers']
  onClose?: (e: Event) => void
}


export interface PopperProps {
  anchor: HTMLElement | null
  isOpen: boolean
  children: React.ReactElement<HTMLDivElement>
  placement?: Options['placement']
  modifiers?: Options['modifiers']
  onClose?: (e: Event) => void
}


export function PopperTooltip({
  children,
  anchor,
  placement,
  modifiers,
  onClose,
}: PopperTooltipProps) {
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const popperRef = React.useRef<any>(null)
  const popperContainerRef = React.useRef<HTMLDivElement>(null)

  function handleClose(event: Event) {
    if (anchor && anchor?.contains(event?.target as Node)) {
      return
    }

    onClose?.(event)
  }

  useClickAway({
    ref: popperContainerRef,
    handler: handleClose,
  })

  React.useEffect(
    () => {
      if (!anchor || !tooltipRef.current) {
        return
      }

      let popperModifiers: Options['modifiers'] = [
        {
          name: 'preventOverflow',
          options: {
            altBoundary: false,
          },
        },
        {
          name: 'flip',
          options: {
            altBoundary: false,
          },
        },
      ];

      if (modifiers != null) {
        popperModifiers = popperModifiers.concat(modifiers)
      }

      const popper = createPopper(anchor, tooltipRef.current, {
        placement,
        modifiers: popperModifiers,
      })

      popperRef.current = popper

      return () => {
        popper.destroy()
        popperRef.current = null
      }
    },
    [anchor, tooltipRef, placement, modifiers]
  )

  return (
    <div ref={tooltipRef} role="tooltip" className={styles.tooltip}>
      <div ref={popperContainerRef} className={styles.popper}>
        {children}
      </div>
    </div>
  )
}


export function Popper({
  anchor,
  isOpen,
  children,
  placement = 'bottom',
  modifiers,
  onClose,
}: PopperProps) {

  if (!isOpen || !anchor) {
    return null
  }

  return (
    <Portal>
      <PopperTooltip
        anchor={anchor}
        placement={placement}
        modifiers={modifiers}
        onClose={onClose}
      >
        {children}
      </PopperTooltip>
    </Portal>
  )
}
