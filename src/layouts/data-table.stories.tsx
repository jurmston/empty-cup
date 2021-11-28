import React from 'react'

import Container from '../Container'
import Stack from '../Stack'
import Chip from '../Chip'
import Input, { InputAddOn } from '../Input'

import FilterIcon from '../icons/FilterListRounded'
import DownIcon from '../icons/KeyboardArrowDownRounded'
import Button from '../Button'
import Text from '../Text'

export default {
  title: 'Layouts/DataTablePage',
}

export const Primary = () => {

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        style={{
          paddingLeft: 24,
          paddingRight: 24,
          width: '100%',
          height: 56,
          maxHeight: 56,
          minHeight: 56,
          borderBottom: '1px solid var(--colors-grey-300)',
          backgroundColor: 'var(--colors-grey-100)',
        }}
      >
        <h3>Hello!</h3>
      </Stack>

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
