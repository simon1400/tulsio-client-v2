// @ts-nocheck
import { FC, SyntheticEvent, useEffect, useState } from "react"
import {CSubMenu, TabS} from './styles'
import { useRouter } from "next/router";
import { Tabs } from "@mui/material";

interface ISubMenu {
  data: any
  handleChange?: (link: string) => void
}

const SubMenu: FC<ISubMenu> = ({
  data,
  handleChange
}) => {

  const router = useRouter()

  const [value, setValue] = useState(false);

  useEffect(() => {
    if(data.length && router.query.category !== 'blog') {
      setValue(data.findIndex(el => el.slug === router.query.category)+1)
    }
  }, [data])

  const handle = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    if(idx === 0) {
      handleChange('blog')
    }else{
      handleChange(data[idx-1].slug)
    }
  };

  return (
    <CSubMenu>
      <Tabs
        value={value}
        onChange={handle}
        variant="scrollable"
        scrollButtons={false}
      >
        <TabS label="Všechny" />
        {data.map((item: any, idx: number) => <TabS key={idx} label={item.title} />)}
      </Tabs>
    </CSubMenu>
  )
}

export default SubMenu