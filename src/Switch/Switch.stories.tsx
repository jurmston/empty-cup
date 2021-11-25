import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from './Switch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Switch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = ({ checked: checkedFromProps, ...args }) => {
  const [checked, setChecked] = React.useState(checkedFromProps || false)

  console.log(checked)

  return (
    <Switch {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Done',
}
