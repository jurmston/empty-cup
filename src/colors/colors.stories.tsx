import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from '../Stack'
import { Card } from '../Card'
import useTheme from '../useTheme'


const colors = [
  { value: 'slate', title: 'Slate' },
  { value: 'grey', title: 'Grey' },
  { value: 'zinc', title: 'Zinc' },
  { value: 'neutral', title: 'Neutral' },
  { value: 'stone', title: 'Stone' },
  { value: 'red', title: 'Red' },
  { value: 'orange', title: 'Orange' },
  { value: 'amber', title: 'Amber' },
  { value: 'yellow', title: 'Yellow' },
  { value: 'lime', title: 'Lime' },
  { value: 'green', title: 'Green' },
  { value: 'emerald', title: 'Emerald' },
  { value: 'teal', title: 'Teal' },
  { value: 'cyan', title: 'Cyan' },
  { value: 'sky', title: 'Sky' },
  { value: 'blue', title: 'Blue' },
  { value: 'indigo', title: 'Indigo' },
  { value: 'violet', title: 'Violet' },
  { value: 'purple', title: 'Purple' },
  { value: 'fuchsia', title: 'Fuchsia' },
  { value: 'pink', title: 'Pink' },
  { value: 'rose', title: 'Rose' },
]

const variants = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const themeVariants = ['super-light', 'light', 'main', 'dark', 'super-dark']

const palettes = [
  { value: 'default', title: 'Default' },
  { value: 'primary', title: 'Primary' },
  { value: 'secondary', title: 'Secondary' },
  { value: 'success', title: 'Success' },
  { value: 'info', title: 'Info' },
  { value: 'warning', title: 'Warning' },
  { value: 'error', title: 'Error' },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Colors/Colors',
}

function ColorDisplay({ value, variant, index }) {
  const [hexValue, setHexValue] = React.useState('')

  React.useEffect(
    () => {
      setHexValue(
        window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--colors-${value}-${variant}`)
      )
    },
    [value, variant],
  )
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridArea: `color-${index}`,
        gap: 4,
      }}
    >
      <div
        style={{
          backgroundColor: `var(--colors-${value}-${variant})`,
          flex: 1,
          borderRadius: 8,
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12 }}><strong>{variant}</strong></span>
        <span
          style={{
            fontSize: 12,
            fontFamily: 'var(--font-family-mono)',
            color: 'var(--colors-text-secondary',
          }}
        >
          {hexValue}
        </span>
      </div>
    </div>

  )
}

function ColorTitle({ value, title }) {
  return (
    <div
      style={{
        gridArea: 'title',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <h5>{title}</h5>
      <p
        style={{
          color: `var(--colors-text-secondary)`,
          fontSize: 12,
          fontFamily: 'var(--font-family-mono)',
        }}
      >
        {`--colors-${value}-*`}
      </p>
    </div>
  )
}

function ColorGroup({ value, title }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.25fr repeat(5, 1fr)',
        gridTemplateRows: '5em 5em',
        gridTemplateAreas: `
          "title color-0 color-1 color-2 color-3 color-4"
          "title color-5 color-6 color-7 color-8 color-9"
        `,
        gap: 8,
      }}
    >
      <ColorTitle value={value} title={title} />
      {variants.map((variant, index) => (
        <ColorDisplay
          key={variant}
          value={value}
          variant={variant}
          index={index}
        />
      ))}
    </div>
  )
}

function PaletteGroup({ value, title }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.25fr repeat(5, 1fr)',
        gridTemplateRows: '5em',
        gridTemplateAreas: `
          "title color-0 color-1 color-2 color-3 color-4"
        `,
        gap: 8,
      }}
    >
      <ColorTitle value={value} title={title} />
      {themeVariants.map((variant, index) => (
        <ColorDisplay
          key={variant}
          value={value}
          variant={variant}
          index={index}
        />
      ))}
    </div>
  )
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <div>
        <h3>Colors</h3>
        <p>
          Inspired by Material Design (@mui) and Tailwind palettes.
        </p>
      </div>
      {colors.map(color => (
        <ColorGroup key={color.value} {...color} />
      ))}

      <div>
        <h3>Palette</h3>
        <p>
          Inspired by Material Design (@mui) and Tailwind palettes.
        </p>
      </div>
      {palettes.map(color => (
        <PaletteGroup key={color.value} {...color} />
      ))}
    </div>
  )
}
