import { Container, IconButton, SvgIcon, useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { ControlWrap, HeaderWrap, Logo, NavWrap } from './styles';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import navHeader from 'queries/navHeader';
import MenuIcon from 'public/icons/menu.svg'
import Search from 'public/icons/search.svg'
import { useRouter } from 'next/router';

const Nav = dynamic(() => import('components/Nav'), {ssr: false})
const Menu = dynamic(() => import('layout/Menu'), {ssr: false})

const Header = () => {

  const theme = useTheme();
  const mediaMd = useMediaQuery(theme.breakpoints.up('md'))

  const [mobileOpen, setMobileOpen] = useState(false);

  const {data, loading} = useQuery(navHeader)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter()

  const [value, setValue] = useState<number>(-1);

  useEffect(() => {
    if(data?.navigation) {
      if(data.navigation.data.attributes.topNav.item.length) {
        const idx = data.navigation.data.attributes.topNav.item.findIndex((el: any) => '/'+el.link === router.asPath)
        if(router.asPath === '/search') {
          setValue(data.navigation.data.attributes.topNav.item.length)
        }else{
          setValue(idx >= 0 ? idx : false)
        } 
      }
    }
  }, [data, router])

  if(loading) {
    return <></>
  }

  const transformData = data.navigation.data.attributes.topNav.item.map((item: any, idx: number) => ({
    title: item.name,
    slug: item.link
  }))

  const handleMenu = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    setMobileOpen(false)
    if(transformData.length === idx) {
      router.push('/search')
    }else{
      router.push('/'+transformData[idx].slug)
    }
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
            {mediaMd && <Nav 
              data={transformData}
              icon={Search}
              handle={handleMenu}
              value={value}
            />}
            {!mediaMd && <Menu 
              mobileOpen={mobileOpen} 
              data={transformData}
              handleMenu={handleMenu}
              value={value}
              loading={loading}
              handleDrawerToggle={handleDrawerToggle} />}
            {!mediaMd && <ControlWrap>
              <IconButton href="/search" sx={{ ml: 0}}>
                <SvgIcon component={Search} />
              </IconButton>
            </ControlWrap>}
            {!mediaMd && <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <SvgIcon component={MenuIcon} />
            </IconButton>}
          </NavWrap>
        </HeaderWrap>
      </Container>
    </header>
  )
}

export default Header
