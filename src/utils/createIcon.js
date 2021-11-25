import * as React from 'react';
import Icon from '../Icon';

/**
 * Create Icon component from svg data.
 */
export default function createSvgIcon(path, displayName) {
  const Component = (props, ref) => (
    <Icon ref={ref} {...props}>
      {path}
    </Icon>
  );

  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(React.forwardRef(Component));
}
