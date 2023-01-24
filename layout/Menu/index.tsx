import { Drawer, List, ListItem, ListItemButton, ListItemText, SvgIcon } from "@mui/material"
import Link from "next/link"
import { FC } from "react"
import { CloseMenuS, MenuS } from "./styles"
import CloseIcon from 'public/icons/close.svg';
import { Logo } from "./styles";
import Search from 'public/icons/search.svg'

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
}

const Menu: FC<Props> = (props) => {

  const { mobileOpen, handleDrawerToggle, data, loading } = props;

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
        keepMounted: true
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: '100%',
          backdropFilter: "blur(15px)",
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
          backgroundColor: "transparent",
          paddingTop: "150px",
          position: 'relative'
        }
      }}
    >
      <Logo>
        <Link href="/">
          <img src="/assets/logo-tulsio.svg" width="211" height="61" alt="Tulsio" />
        </Link>
      </Logo>
      <CloseMenuS>
        <SvgIcon component={Search} sx={{ fontSize: 32 }} />
        <SvgIcon component={CloseIcon} sx={{ fontSize: 32 }} onClick={() => handleDrawerToggle()} />
      </CloseMenuS>
      <MenuS>
        <List component="nav">
          {data.navigation.data.attributes.topNav.item.map((item: any, idx: number) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MenuS>
    </Drawer>
  )
}

export default Menu