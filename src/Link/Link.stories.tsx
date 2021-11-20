import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '../Icon'
import { Link } from './Link'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Link',
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Link',
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  startIcon: <Icon>edit</Icon>,
  children: 'Link',
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  endIcon: <Icon>close</Icon>,
  children: 'Link',
}
