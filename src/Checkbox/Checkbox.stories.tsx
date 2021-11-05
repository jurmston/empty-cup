import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from './Checkbox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Checkbox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = ({ checked: checkedFromProps, ...args }) => {
  const [checked, setChecked] = React.useState(checkedFromProps || false)

  console.log(checked)

  return (
    <Checkbox {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />
  )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Done',
}
