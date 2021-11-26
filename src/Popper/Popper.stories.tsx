import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Button } from '../Button'
import { Popper } from './Popper'
import DownIcon from '../icons/KeyboardArrowDownRounded'
import Card from '../Card'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Popper',
  component: Popper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Popper>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchor(anchor ? null : event.currentTarget)
  }

  return (
    <>
      <Button
        variant="outlined"
        endIcon={<DownIcon />}
        onClick={handleClick}
      >
        Open
      </Button>

      <Card style={{ padding: 8, marginTop: 16, backgroundColor: `var(--colors-purple-300)`}}>
        <h3>Just here for some layering.</h3>
      </Card>

      <Popper
        isOpen={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        anchor={anchor}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            }
          }
        ]}
      >
        <Card style={{ minWidth: 300 }}>
          <h6>Boop!</h6>
        </Card>
      </Popper>
    </>
  )
}
