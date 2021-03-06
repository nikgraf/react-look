import statefulValue from '../../modules/plugins/statefulValue'
import Look, { StyleSheet } from '../../modules/dom'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'


describe('Resolving stateful values', () => {

  it('should resolve stateful values', () => {
    const Component = {
      props: {
        color: 'red'
      }
    }
    expect(statefulValue({
      styles: {
        color: (props) => props.color
      },
      Component
    })).to.eql({ color: 'red' })
  })

  it('should do nothing if no function was passed', () => {
    const Component = {
      props: {
        color: 'red'
      }
    }
    expect(statefulValue({
      styles: {
        color: 'red'
      },
      Component
    })).to.eql({ color: 'red' })
  })
})
