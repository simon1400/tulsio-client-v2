import { useState, useEffect } from 'react'
import { Container, IconButton, SvgIcon } from '@mui/material'
// import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import Lang from 'components/Lang'
import Nav from 'components/Nav'
import Menu from 'layout/Menu'
import MenuIcon from 'public/icons/menu.svg'
import Search from 'public/icons/search.svg'

import { ControlWrap, HeaderWrap, Logo, NavWrap } from './styles'

// const Menu = dynamic(() => import('layout/Menu'), { ssr: false })

type HeaderProps = {
  data: {
    navigation: {
      data: {
        attributes: {
          topNav: {
            item: { name: string; link: string }[]
          }
        }
      }
    }
  }
}

const Header = ({ data }: HeaderProps) => {
  const router = useRouter()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedNavIndex, setSelectedNavIndex] = useState<number>(-1)

  const topNavItems = data?.navigation?.data?.attributes?.topNav?.item || []

  // Синхронизация выбранного элемента меню с текущим путем
  useEffect(() => {
    const currentPath = router.asPath
    const navIndex = topNavItems.findIndex((item) => `/${item.link}` === currentPath)
    setSelectedNavIndex(currentPath === '/search' ? 0 : navIndex >= 0 ? navIndex + 1 : -1)
  }, [topNavItems, router.asPath])

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev)

  const handleMenu = (e: React.SyntheticEvent, slug: string) => {
    e.preventDefault()
    router.push(`/${slug}`)
    setMobileOpen(false)
  }

  const transformedData = topNavItems.map((item) => ({
    title: item.name,
    slug: '/'+item.link,
  }))

  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo>
            <Link href="/" passHref>
              <Image src="/assets/logo-tulsio.svg" width={211} height={61} alt="Tulsio" />
            </Link>
          </Logo>
          <NavWrap>
            {/* Десктопная навигация */}
            <div className="desktop-only">
              <Nav data={transformedData} handle={handleMenu} icon={Search} />
            </div>
            {/* Мобильное меню */}
            <div className="mobile-only">
              <Menu
                mobileOpen={mobileOpen}
                data={transformedData}
                handleMenu={handleMenu}
                value={selectedNavIndex}
                handleDrawerToggle={handleDrawerToggle}
              />
              <ControlWrap>
                <IconButton href="/cs/search" sx={{ ml: 0 }}>
                  <SvgIcon component={Search} sx={{ fontSize: 32 }} />
                </IconButton>
              </ControlWrap>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 0 }}
              >
                <SvgIcon fontSize={'large'} component={MenuIcon} />
              </IconButton>
            </div>
            {/* <Lang /> */}
          </NavWrap>
        </HeaderWrap>
      </Container>
    </header>
  )
}

export default Header