import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { Button, ButtonProps, BUTTON_VARIANTS } from './Button'
import { palettes } from '../styles'
import FilterIcon from '../icons/FilterListRounded'
import CancelIcon from '../icons/CancelRounded'


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    palette: {
      control: 'select',
      options: palettes,
    },
    variant: {
      control: 'select',
      options: BUTTON_VARIANTS,
    },
    startIcon: {
      control: 'boolean',
    },
    endIcon: {
      control: 'boolean',
    },
  }
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => (
  <Button
    {...args}
    startIcon={args.startIcon ? <FilterIcon /> : null}
    endIcon={args.endIcon ? <CancelIcon /> : null}
  />
)

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = {
  children: <FilterIcon />,
  palette: 'primary',
  variant: 'text',
  startIcon: false,
}