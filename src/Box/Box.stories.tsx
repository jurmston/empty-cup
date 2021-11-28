import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from './Box'
import Input from '../Input'
import Stack from '../Stack'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Box>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  const [marginKey, setMarginKey] = React.useState('m')
  const [marginValue, setMarginValue] = React.useState(2)
  const [paddingKey, setPaddingKey] = React.useState('p')
  const [paddingValue, setPaddingValue] = React.useState(2)
  const [color, setColor] = React.useState('text-primary')
  const [bg, setBgColor] = React.useState('white')
  const [borderColor, setBorderColor] = React.useState('transparent')

  return (
    <>
      <Stack alignItems="center" direction="row" gap={1}>
        <Input
          label="Margin"
          value={marginKey}
          onChange={event => setMarginKey(event.target.value)}
          placeholder="Key value..."
          disableFullWidth
          orientation="horizontal"
        />

        <Input
          value={marginValue}
          onChange={event => setMarginValue(event.target.value)}
          type="number"
          placeholder="Spacing..."
          disableFullWidth
          orientation="horizontal"
        />
      </Stack>

      <Stack alignItems="center" direction="row" gap={1}>
        <Input
          label="Padding"
          value={paddingKey}
          onChange={event => setPaddingKey(event.target.value)}
          placeholder="Key value..."
          disableFullWidth
          orientation="horizontal"
        />

        <Input
          value={paddingValue}
          onChange={event => setPaddingValue(event.target.value)}
          type="number"
          placeholder="Spacing..."
          disableFullWidth
          orientation="horizontal"
        />
      </Stack>

      <Stack alignItems="center" direction="row" gap={1}>
        <Input
          label="Color"
          value={color}
          onChange={event => setColor(event.target.value)}
          disableFullWidth
          orientation="horizontal"
        />
      </Stack>

      <Stack alignItems="center" direction="row" gap={1}>
        <Input
          label="Background Color"
          value={bg}
          onChange={event => setBgColor(event.target.value)}
          disableFullWidth
          orientation="horizontal"
        />
      </Stack>


      <div style={{ display: 'inline-block', backgroundColor: 'var(--palette--rose-200)', width: '100%' }}>
        <Box
          sx={{
            [marginKey]: marginValue,
            [paddingKey]: paddingValue,
            color,
            bg,
            borderColor,
            borderRadius: 1,
            shadow: 'xs',
            grid: 4,
            gap: 1,
            gridAutoRows: '1fr',
            transition: 'background-color standard ease-in',
            xs: {
              grid: 1,
              bg: 'red',
            },
            sm: {
              grid: 2,
              bg: 'orange',
            },
            md: {
              grid: 4,
              fontSize: 25,
              bg: 'yellow',
            },
          }}
        >
          <Box sx={{ bg: 'red', borderRadius: 0.5 }}>
            <p>Hello</p>
          </Box>
          <Box sx={{ bg: 'orange', span: 2, borderRadius: 0.5 }} />
          <Box sx={{ bg: 'white', borderRadius: 0.5, p: 1 }}>
            <Box sx={{ w: 1, h: 56, bg: 'lime-200' }} />
          </Box>
          <Box sx={{ bg: 'green', borderRadius: 0.5 }} />
          <Box sx={{ bg: 'blue', h: 65, borderRadius: 0.5 }} />
          <Box sx={{ bg: 'purple', borderRadius: 0.5 }} />
        </Box>
      </div>
    </>
  )
}
