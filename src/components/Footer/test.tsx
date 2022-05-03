import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render a footer with 4 columns', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Follow us')).toBeInTheDocument()
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
