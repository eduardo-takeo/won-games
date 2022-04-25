import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render Menu correctly', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Won Games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search button/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument()
  })

  it('should handle open/close menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // Check if menu is hidden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle('opacity: 0')

    // Check if menu is opened after button click
    fireEvent.click(screen.getByLabelText(/Open Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle('opacity: 1')

    // Check if menu is closed after another button click
    fireEvent.click(screen.getByLabelText(/Close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle('opacity: 0')
  })

  it('should hide wishlist and account, and render register box when it has no username', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })

  it('should hide register box, and render wishlist and account when it has username', () => {
    renderWithTheme(<Menu username="test" />)

    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/My Account/i)).toBeInTheDocument()
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
  })
})
