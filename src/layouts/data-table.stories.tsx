import React from 'react'

import Container from '../Container'
import Stack from '../Stack'
import Chip from '../Chip'
import Avatar from '../Avatar'
import Text from '../Text'
import Input, { InputAddOn } from '../Input'

import FilterIcon from '../icons/FilterListRounded'
import DownIcon from '../icons/KeyboardArrowDownRounded'
import Button from '../Button'
import Box from '../Box'

export default {
  title: 'Layouts/DataTablePage',
}

export const Primary = () => {

  return (
    <>
      <Box
        sx={{
          stack: 'row flex-start center',
          px: 3,
          h: 56,
          hMin: 56,
          mMax: 56,
          bg: 'default-100',
          borderColor: 'default-300',
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          w: 1,
        }}
      >
        <h3>Hello!</h3>
        <div style={{ flex: 1 }} />

        <Box
          component="button"
          sx={{
            stack: 'row center center',
            gap: 1,
            rounded: 'full',
            h: 36,
            shadow: 'xs',
            border: 1,
            bg: 'white',
            borderColor: 'default-300',
          }}
        >
          <Avatar
            name="Bob Smith"
            style={{ backgroundColor: 'orange' }}
            size={3}
          />

          <Text>Bob Smith</Text>

          <DownIcon />
        </Box>
      </Box>

      <Container style={{ marginTop: 16 }}>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
        >
          <h1>Companies</h1>
          <Chip>Showing 10 of 346</Chip>

          <div style={{ flex: 1 }} />

          <Input
            placeholder="Active Companies"
            endAddOn={
              <InputAddOn position="right" onClick={() => alert('filter')}>
                <FilterIcon />
              </InputAddOn>
            }
          />

          <Button
            variant="outlined"
            endIcon={<DownIcon />}
          >
            Actions
          </Button>
        </Stack>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Description</th>
              <th style={{ textAlign: 'right' }}>Modified</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Test</td>
              <td>test@example.com</td>
              <td>A company to play with</td>
              <td style={{ textAlign: 'right' }}>Tues 11/7/2021 9:30 AM</td>
            </tr>

            <tr>
              <td>Test</td>
              <td>test@example.com</td>
              <td>A company to play with</td>
              <td style={{ textAlign: 'right' }}>Tues 11/7/2021 9:30 AM</td>
            </tr>

            <tr>
              <td>Test</td>
              <td>test@example.com</td>
              <td>A company to play with</td>
              <td style={{ textAlign: 'right' }}>Tues 11/7/2021 9:30 AM</td>
            </tr>

            <tr>
              <td>Test</td>
              <td>test@example.com</td>
              <td>A company to play with</td>
              <td style={{ textAlign: 'right' }}>Tues 11/7/2021 9:30 AM</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={4}>
                <Stack direction="row" gap={1} alignItems="center">
                  <Text color="textSecondary">Showing 1 - 4 of 27 results</Text>

                  <div style={{ flex: 1 }} />

                  <Button variant="outlined">Previous</Button>
                  <Button variant="outlined">Next</Button>
                </Stack>
              </td>
            </tr>
          </tfoot>
        </table>
      </Container>
    </>
  )
}
