import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render Ribbon correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should have primary color if no color is passed', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByRole('main', { name: '' })).toHaveStyle(
      'background-color: #F231A5'
    )
  })

  it('should have secondary color if color is secondary', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByRole('main', { name: '' })).toHaveStyle(
      'background-color: #3CD3C1'
    )
  })

  it('should render normal sized if no size is passed', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByRole('main', { name: '' })).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render small sized if size is small', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByRole('main', { name: '' })).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
