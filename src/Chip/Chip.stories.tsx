import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from '../Stack'
import { Chip } from './Chip'
import CheckIcon from '../icons/CheckRounded'
import CloseIcon from '../icons/CloseRounded'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Chip',
  component: Chip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Chip>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  return (
    <Stack gap={1} direction="row">
      <Chip>Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="info">Info</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="error">Error</Chip>
    </Stack>
  )
}

export const Clickable = () => {
  return (
    <Stack gap={1} direction="row">
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')}>Default</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="primary">Primary</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="secondary">Secondary</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="success">Success</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="info">Info</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="warning">Warning</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} color="error">Error</Chip>
    </Stack>
  )
}
