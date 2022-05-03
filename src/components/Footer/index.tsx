import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a
            href="mailto:sac@wongames.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sac@wongames.com
          </a>
          <a href="tel:11123456789" target="_blank" rel="noopener noreferrer">
            11 12345-6789
          </a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>
          <nav aria-labelledby="social-media">
            <a
              href="http://instagram.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="http://twitter.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="http://youtube.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="http://facebook.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>
          <Link href="#">
            <a>Loja</a>
          </Link>
          <Link href="#">
            <a>Explorar</a>
          </Link>
          <Link href="#">
            <a>Buscar</a>
          </Link>
          <Link href="#">
            <a>FAQ</a>
          </Link>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <span>Rua 7 de Maio</span>
          <span>527 - 89020330</span>
          <span>Rio de Janeiro, Brasil</span>
        </S.Column>
      </S.Content>

      <S.Copyright>
        Won Games 2020 &copy; Todos os direitos reservados
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
