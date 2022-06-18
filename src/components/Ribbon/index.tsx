import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: 'small' | 'normal'
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

export default Ribbon
