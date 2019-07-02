import React from 'react'
import About from '../../../components/About'
import { shallow } from 'enzyme'

const defaultProps = {
  navRef: jest.fn(),
  size: 'medium'
}

describe('<About />', () => {
  test('Should render the <About />.', () => {
    const component = shallow(<About {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <About /> when viewed from a small device.', () => {
    const component = shallow(<About {...defaultProps} size="small" />)
    expect(component).toMatchSnapshot()
  })
})