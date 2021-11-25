import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from '../Stack'
import { Button } from '../Button'
import { Text } from './Text'
import { Link } from '../Link'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Text>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  return (
    <Stack gap={1} direction="column">
      <Text>Default</Text>
      <Text strong color="textSecondary">Text Secondary</Text>
      <Text emphasis color="textDisabled">Text Disabled</Text>
      <Text strong emphasis color="primary">Primary</Text>
      <Text color="secondary">Secondary</Text>
      <Text color="success">Success</Text>
      <Text color="info">Info</Text>
      <Text color="warning">Warning</Text>
      <Text color="error">Error</Text>
      <Text>The is inline text with <Text component="span" strong>strong text</Text>.</Text>
      <Text>The is inline text with a <Text component="a" link color="primary">link</Text></Text>
    </Stack>
  )
}
