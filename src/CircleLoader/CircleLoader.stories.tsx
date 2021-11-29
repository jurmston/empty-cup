import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getColors } from '../styles'
import { CircleLoader } from './CircleLoader'

const colors = getColors()

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CircleLoader',
  component: CircleLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'select', options: colors },
    bgcolor: { control: 'select', options: colors },
    value: { control: { type: 'range', min: 0, max: 100 }},
    size: { control: { type: 'range', min: 5, max: 200 }},
    variant: { control: 'select', options: ['indeterminate', 'determinate'] },
  },
} as ComponentMeta<typeof CircleLoader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleLoader> = (args) => (
  <CircleLoader {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  value: 0,
  size: 40,
  variant: 'indeterminate',
}
