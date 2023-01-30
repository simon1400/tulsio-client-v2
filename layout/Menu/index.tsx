import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, SvgIcon } from "@mui/material"
import Link from "next/link"
import { FC, SyntheticEvent } from "react"
import { CloseMenuS, MenuS } from "./styles"
import CloseIcon from 'public/icons/close.svg';
import { Logo } from "./styles";
import Search from 'public/icons/search.svg'
import Nav from "components/Nav";

export interface INavItem {
  id: string
  title: string
  link: string
}

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void
  data: any;
  loading: boolean;
  handleMenu: (e: SyntheticEvent, idx: number) => void;
  value: number;
}

const Menu: FC<Props> = (props) => {

  const { mobileOpen, handleDrawerToggle, data, loading, handleMenu, value } = props;

  if(loading) {
    return <></>
  }

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        backgroundColor: "transparent",
        '& .MuiBackdrop-root': {
          backgroundColor: "transparent",
          backdropFilter: "blur(15px)",
        },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: '100%',
          backgroundColor: "transparent",
          paddingTop: "150px",
          position: 'relative',
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }
      }}
    >
      <Logo>
        <Link href="/">
          <img src="/assets/logo-tulsio.svg" width="211" height="61" alt="Tulsio" />
        </Link>
      </Logo>
      <CloseMenuS>
        <IconButton href="/search" sx={{ ml: 0, p: 0}}><SvgIcon component={Search} sx={{ fontSize: 32 }} /></IconButton>
        <IconButton onClick={() => handleDrawerToggle()} sx={{ ml: 0, p: 0}}><SvgIcon component={CloseIcon} sx={{ fontSize: 32 }} /></IconButton>
      </CloseMenuS>
      <Nav mobile data={data} handle={handleMenu} value={value} orientation="vertical" />
    </Drawer>
  )
}

export default Menu