import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import Link from "next/link"
import { FC } from "react"
import { CloseMenuS, MenuS } from "./styles"
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from "./styles";

export interface INavItem {
  id: string
  title: string
  link: string
}

const drawerWidth = '100%';

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void
  data: any;
  loading: boolean;
}

const Menu: FC<Props> = (props) => {

  const { mobileOpen, handleDrawerToggle, data, loading } = props;

  console.log(data);

  if(loading) {
    return <></>
  }

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            background: '#202020',
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
          <CloseIcon 
            sx={{ fontSize: 44 }} 
            onClick={() => handleDrawerToggle()} />
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
      {/* <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          background: '#202020',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <MenuS>
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </MenuS>
      </Drawer> */}
    </>
  )
}

export default Menu