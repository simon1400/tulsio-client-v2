import { Container, IconButton, useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { ControlWrap, HeaderWrap, Logo, NavWrap } from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import navHeader from 'queries/navHeader';

const TopNav = dynamic(() => import('components/TopNav'), {ssr: false})
const Menu = dynamic(() => import('layout/Menu'), {ssr: false})

const Header = () => {

  const theme = useTheme();
  const mediaMd = useMediaQuery(theme.breakpoints.up('md'))

  const [mobileOpen, setMobileOpen] = useState(false);

  const {data, loading} = useQuery(navHeader)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
            {mediaMd && <TopNav data={data} loading={loading} type="topNav" />}
            {!mediaMd && <Menu 
              mobileOpen={mobileOpen} 
              data={data}
              loading={loading}
              handleDrawerToggle={handleDrawerToggle} />}
            <ControlWrap>
              <IconButton 
                href="/search"
                sx={{ ml: 0 }}
              >
                <SearchIcon sx={{color: "white"}} />
              </IconButton>
            </ControlWrap>
            {!mediaMd && <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>}
          </NavWrap>
        </HeaderWrap>
      </Container>
    </header>
  )
}

export default Header
