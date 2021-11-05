import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card style={{ maxWidth: 300 }} {...args}>
    <h1>Hello There</h1>
    <p style={{ color: 'var(--theme-text-secondary' }}>What are you doing?</p>
  </Card>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
}

export const Secondary = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gap: 'calc(var(--unit) * 2)',
        gridTemplateColumns: '1fr 3fr',
      }}
    >
      <Card>
        <h1>Hello There</h1>
        <p style={{ color: 'var(--theme-text-secondary' }}>What are you doing?</p>
      </Card>

      <Card>
        <h1>Hello There</h1>
        <p style={{ color: 'var(--theme-text-secondary' }}>What are you doing?</p>
      </Card>
    </div>
  )
}