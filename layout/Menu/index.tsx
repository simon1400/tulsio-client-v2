import type { FC, SyntheticEvent } from 'react'

import { Drawer, IconButton, SvgIcon } from '@mui/material'
import Lang from 'components/Lang'
import Nav from 'components/Nav'
import Link from 'next/link'
import CloseIcon from 'public/icons/close.svg'
import Search from 'public/icons/search.svg'

import { CloseMenuS, Logo } from './styles'

export interface INavItem {
  id: string
  title: string
  link: string
}

interface Props {
  mobileOpen: boolean
  handleDrawerToggle: () => void
  data: any
  handleMenu: (e: SyntheticEvent, slug: string) => void
  value: number
}

const Menu: FC<Props> = (props) => {
  const { mobileOpen, handleDrawerToggle, data, handleMenu } = props

  return (
    <Drawer
      variant={'temporary'}
      anchor={'right'}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        backgroundColor: 'transparent',
        '& .MuiBackdrop-root': {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '100%',
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          paddingTop: '150px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        },
      }}
    >
      <Logo>
        <Link href={'/'}>
          <img src={'/assets/logo-tulsio.svg'} width={'211'} height={'61'} alt={'Tulsio'} />
        </Link>
      </Logo>
      <CloseMenuS>
        <Lang />
        <IconButton href={'/search'} sx={{ ml: 0, p: 0 }}>
          <SvgIcon component={Search} sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton onClick={() => handleDrawerToggle()} sx={{ ml: 0, p: 0 }}>
          <SvgIcon component={CloseIcon} sx={{ fontSize: 32 }} />
        </IconButton>
      </CloseMenuS>
      <Nav mobile handle={handleMenu} data={data} />
    </Drawer>
  )
}

export default Menu
