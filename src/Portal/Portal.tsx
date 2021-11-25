import * as React from 'react';
import * as ReactDOM from 'react-dom';


interface PortalProps {
  children: React.ReactElement<HTMLDivElement>
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */
export function Portal({ children }: PortalProps) {
  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null)

  React.useEffect(
    () => {
      setMountNode(document.body)
    },
    []
  )

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
}

export default Portal