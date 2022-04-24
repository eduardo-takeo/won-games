import * as S from './styles'
import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline'
import { ShoppingCartOutline as ShoppingCartIcon } from '@styled-icons/evaicons-outline/ShoppingCartOutline'
import { Close as CloseIcon } from 'styled-icons/material-outlined'

import Logo from 'components/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search button" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.FullMenu role="navigation" aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.FullMenu>
    </S.Wrapper>
  )
}

export default Menu
