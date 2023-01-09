import { Container } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { ControlWrap, HeaderWrap, Logo, NavWrap } from './styles';

// const Menu = dynamic(() => import('../Menu'), {suspense: true}) 
const TopNav = dynamic(() => import('../../components/TopNav'), {suspense: true})  

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo>
            <Link href="/">
              <img src="/assets/logo-tulsio.svg" width="211" height="61" alt="Tulsio" />
            </Link>
          </Logo>
          <NavWrap>
            <TopNav />
            {/* <Menu /> */}
            <ControlWrap>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"/></svg>
            </ControlWrap>
          </NavWrap>
        </HeaderWrap>
      </Container>
    </header>
  )
}

export default Header
