import { FC, ReactElement, SyntheticEvent } from "react"
import {CSubMenu, TabS} from './styles'
import { Tabs } from "@mui/material";
import Search from 'public/icons/search.svg'

interface INav {
  value: number;
  handle: (e: SyntheticEvent, idx: number) => void;
  data: any;
  subMenu?: boolean;
  category?: boolean;
  mobile?: boolean;
  orientation?: 'horizontal' | 'vertical';
  icon?: ReactElement;
}

const Nav: FC<INav> = ({
  value,
  handle,
  data,
  subMenu = false,
  category = false,
  mobile = false,
  orientation = 'horizontal',
  icon = null
}) => {
  
  return (
    <CSubMenu removeMargin={!subMenu} mobile={mobile}>
      <Tabs
        value={value}
        onChange={handle}
        variant="scrollable"
        scrollButtons={false}
        orientation={orientation}
      >
        {category && <TabS mobile={mobile} label="Všechny" />}
        {data.map((item: any, idx: number) => <TabS mobile={mobile} key={idx} label={item.title} />)}
        {icon && <TabS mobile={mobile} aria-label="iconMenu" icon={<Search />} />}
      </Tabs>
    </CSubMenu>
  )
}

export default Nav