import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { palettes, shades, miscColors } from '../styles'

import {
  Text,
  TextProps,
  textVariants,
  textWeightMapping,
  textLeadingMapping,
  textTrackingMapping
} from './Text'


const colors = palettes.concat(miscColors.concat(palettes.flatMap(p => shades.map(s => `${p}-${s}`))))

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    strong: {
      control: 'boolean',
    },
    emphasis: {
      control: 'boolean',
    },
    link: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: textVariants,
    },
    weight: {
      control: 'select',
      options: Object.keys(textWeightMapping),
    },
    tracking: {
      control: 'select',
      options: Object.keys(textTrackingMapping),
    },
    leading: {
      control: 'select',
      options: Object.keys(textLeadingMapping),
    },
    size: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.05,
      },
    }
  },
} as Meta

// Create a master template for mapping args to render the Button component
const Template: Story<TextProps> = (args) => (
  <Text {...args} />
)

const demoText = 'The quick brown fox jumps over the lazy dog.'

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
  children: demoText,
  color: 'text-primary',
}


export const All = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {textVariants.map(variant => (
      <Text key={variant} variant={variant}>
        {`${variant}: ${demoText}`}
      </Text>
    ))}
  </div>
)
