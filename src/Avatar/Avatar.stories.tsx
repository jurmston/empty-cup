import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'
import TaskAltIcon from '../icons/TaskAltRounded'
import Box from '../Box'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Avatar>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  return (
    <Box
      sx={{
        stack: 'row center center',
        gap: 1,
      }}
    >
      <Avatar
        component="button"
        onClick={() => {}}
        name="Bob Smith"
        style={{ backgroundColor: 'orange' }}
      />

      <Avatar
        src="https://randomuser.me/api/portraits/men/3.jpg"
        name="Bob Smith"
      />

      <Avatar
        icon={<TaskAltIcon />}
        name="Bob Smith"
      />

      <Avatar />
    </Box>
  )
}
