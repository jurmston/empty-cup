import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import HelpIcon from '../icons/HelpRounded'
import { AddOn } from '../AddOn'
import { Input } from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <Input {...args} />
  </div>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  startAdornment: <HelpIcon />,
  endAddOn: <AddOn component="button" onClick={() => alert('hi')}>Click</AddOn>,
}
