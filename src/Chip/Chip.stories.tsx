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
      <Chip palette="primary">Primary</Chip>
      <Chip palette="secondary">Secondary</Chip>
      <Chip palette="success">Success</Chip>
      <Chip palette="info">Info</Chip>
      <Chip palette="warning">Warning</Chip>
      <Chip palette="error">Error</Chip>
    </Stack>
  )
}

export const Clickable = () => {
  return (
    <Stack gap={1} direction="row">
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')}>Default</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="primary">Primary</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="secondary">Secondary</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="success">Success</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="info">Info</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="warning">Warning</Chip>
      <Chip endIcon={<CloseIcon />} onClick={() => alert('Clicked')} palette="error">Error</Chip>
    </Stack>
  )
}
