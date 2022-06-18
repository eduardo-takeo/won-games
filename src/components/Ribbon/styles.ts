import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `
}

export const Wrapper = styled.main<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
