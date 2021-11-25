import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MenuListItem } from '../MenuListItem'
import { MenuList } from '../MenuList'
import { MenuButton } from '../MenuButton'
import { Popper } from '../Popper'
import { Menu } from './Menu'
import DownIcon from '../icons/KeyboardArrowDownRounded'
import Card from '../Card'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Menu>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = () => {

  return (
    <>
      <Menu>
        <MenuButton
          variant="outlined"
          endIcon={<DownIcon />}
        >
          Open
        </MenuButton>

        <MenuList containerProps={{ style: { minWidth: 300 } }}>
          <MenuListItem autoFocus>Item 1</MenuListItem>
          <MenuListItem>Item 2</MenuListItem>
          <MenuListItem>Item 3</MenuListItem>
          <MenuListItem isDisabled>Disabled Item 4</MenuListItem>
          <MenuListItem isSelected>Selected Item 5</MenuListItem>
        </MenuList>
      </Menu>

      <Card style={{ padding: 16, marginTop: 16, backgroundColor: `rgb(var(--colors-purple-300))`}}>
        <h3>Just here for some layering.</h3>
      </Card>
    </>
  )
}
