import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <Select {...args} />
  </div>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: ['Apple', 'Orange', 'Banana', 'Oreo Cookie'],
}
