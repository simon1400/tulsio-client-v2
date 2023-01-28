import { FC, SyntheticEvent, useState } from "react"
import {CSubMenu, TabS} from './styles'
import { Tabs } from "@mui/material";

interface ISubMenu {
  data: any
}

const AlphabetsSubMenu: FC<ISubMenu> = ({
  data
}) => {

  const [value, setValue] = useState(0);

  const handle = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    const element = document.getElementById(data[idx]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CSubMenu sticky={true}>
      <Tabs
        value={value}
        onChange={handle}
        variant="scrollable"
        scrollButtons={false}
      >
        {data.map((item: any, idx: number) => <TabS key={idx} label={item} />)}
      </Tabs>
    </CSubMenu>
  )
}

export default AlphabetsSubMenu