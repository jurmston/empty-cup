import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Container } from './Container'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Container>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <div style={{ width: '100%', height: 500, backgroundColor: 'red' }} />
  </Container>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
}
