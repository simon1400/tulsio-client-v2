import type { SyntheticEvent } from 'react'

import { useQuery } from '@apollo/client'
import { Container, IconButton, SvgIcon, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Lang from 'components/Lang'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from 'public/icons/menu.svg'
import Search from 'public/icons/search.svg'
import navHeader from 'queries/navHeader'
import { useEffect, useState } from 'react'

import { ControlWrap, HeaderWrap, Logo, NavWrap } from './styles'

const Nav = dynamic(() => import('components/Nav'), { ssr: false })
const Menu = dynamic(() => import('layout/Menu'), { ssr: false })

const Header = () => {
  const theme = useTheme()
  const mediaMd = useMediaQuery(theme.breakpoints.up('md'))
  const router = useRouter()

  const [mobileOpen, setMobileOpen] = useState(false)

  const { data, loading } = useQuery(navHeader, {
    variables: {
      locale: router.locale,
    },
  })

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const [value, setValue] = useState<number>(-1)

  useEffect(() => {
    const topNavItems = data?.navigation?.data?.attributes?.topNav?.item || []

    if (topNavItems.length) {
      const idx = topNavItems.findIndex((el: any) => `/${el.link}` === router.asPath)
      setValue(router.asPath === '/search' ? 0 : idx >= 0 ? idx + 1 : false)
    }
  }, [data, router])

  if (loading) {
    return <header />
  }

  const transformData = data.navigation.data.attributes.topNav.item.map(
    (item: any, idx: number) => ({
      title: item.name,
      slug: item.link,
    }),
  )

  const handleMenu = (e: SyntheticEvent, slug: string) => {
    e.preventDefault()
    router.push(`/${slug}`)
    setMobileOpen(false)
  }

  return (
    <header>
      <Container>
        <HeaderWrap>
          <Logo>
            <Link href={'/'}>
              <Image src={'/assets/logo-tulsio.svg'} width={'211'} height={'61'} alt={'Tulsio'} />
            </Link>
          </Logo>
          <NavWrap>
            {mediaMd && <Nav data={transformData} handle={handleMenu} icon={Search} />}
            <Lang />
            {!mediaMd && (
              <Menu
                mobileOpen={mobileOpen}
                data={transformData}
                handleMenu={handleMenu}
                value={value}
                loading={loading}
                handleDrawerToggle={handleDrawerToggle}
              />
            )}
            {!mediaMd && (
              <ControlWrap>
                <IconButton href={'/search'} sx={{ ml: 0 }}>
                  <SvgIcon component={Search} sx={{ fontSize: 32 }} />
                </IconButton>
              </ControlWrap>
            )}
            {!mediaMd && (
              <IconButton
                color={'inherit'}
                aria-label={'open drawer'}
                edge={'start'}
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <SvgIcon component={MenuIcon} />
              </IconButton>
            )}
          </NavWrap>
        </HeaderWrap>
      </Container>
    </header>
  )
}

export default Header
