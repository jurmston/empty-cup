import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '../Icon'
import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  startIcon: <Icon>edit</Icon>,
  children: 'Button',
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  endIcon: <Icon>close</Icon>,
  children: 'Button',
}

export const Layout = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Button variant="contained">Contained</Button>
    <Button variant="contained" startIcon={<Icon>edit</Icon>}>Contained Icon</Button>
    <Button>Text</Button>
    <Button startIcon={<Icon>edit</Icon>}>Text Icon</Button>
  </div>
)

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }