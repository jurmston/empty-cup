import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '../Card'
import { Grid } from './Grid'
import { GridItem } from '../GridItem'

const COLORS = [
  'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue',
  'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber',
  'orange', 'deep-orange', 'brown', 'blue-grey', 'grey'
]

const VARIANTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'a100', 'a200', 'a400', 'a700']

function getRandomColor() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)]

  return `var(--colors-${color}-${variant})`
}


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    numItems: {
      control: { type: 'range', min: 1, max: 50 },
    }
  }
} as ComponentMeta<typeof Grid>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <Grid {...args}>
      {Array.from({ length: 100 }).map((_, i) => {
        const height = 100 + Math.floor(Math.random() * 300)
        const width = Math.ceil(Math.random() * 6)

        return (
          <GridItem key={i} xs={width}>
            <Card
              style={{
                height: '100%',
                backgroundColor: getRandomColor(),
              }}
            >
              <div style={{ height }}>
                <h2>Item {i}</h2>
                <p>Hello there: {width}</p>
              </div>
            </Card>
          </GridItem>
        )
      })}
    </Grid>
  )
  }

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  gap: 1,
}
