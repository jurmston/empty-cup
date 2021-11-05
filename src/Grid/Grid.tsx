import * as React from 'react'
import clsx from 'clsx'
import './styles.css'

interface GridProps {
  gap?: number
  rowGap?: number
  columnGap?: number
  columns?: number
  children?: React.ReactNode
  hasEqualRowHeight?: boolean
  isDense?: boolean
}

export function Grid({
  gap = 0,
  rowGap = 0,
  columnGap = 0,
  columns: columnsFromProps = 12,
  hasEqualRowHeight = false,
  children,
  isDense = false,
}: GridProps) {

  // Restrict columns between 1 and 100
  const columns = React.useMemo(
    () => Math.min(100, Math.max(1, columnsFromProps)),
    [columnsFromProps]
  )

  const gridStyle = {
    gap: `calc(var(--unit) * ${rowGap || gap}) calc(var(--unit) * ${columnGap || gap})`,
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr)`,
    gridAutoRows: hasEqualRowHeight ? '1fr' : 'auto',
    
    gridAutoFlow: isDense ? 'dense' : 'row',
  }

  return (
    <div
      className={clsx('grid')}
      style={gridStyle}
    >
      {children}
    </div>
  )
}
