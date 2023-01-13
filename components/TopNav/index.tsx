import { useRouter } from "next/router"
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { CSubMenu, TabS } from "components/SubMenu/styles";
import { Tabs } from "@mui/material";

export interface ITopNav {
  data: any
  loading: boolean
}

const TopNav: FC<ITopNav> = ({
  data, 
  loading
}) => {

  const router = useRouter()

  const [value, setValue] = useState(0);

  useEffect(() => {
    if(data?.navigation) {
      if(data.navigation.data.attributes.topNav.item.length) {
        setValue(data.navigation.data.attributes.topNav.item.findIndex((el: any) => el.link === router.asPath))
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

  const handle = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    router.push(transformData[idx].slug)
  };

  return (
    <CSubMenu removeMargin>
      <Tabs value={value} onChange={handle}>
        {transformData.map((item: any, idx: number) => <TabS key={idx} label={item.title} />)}
      </Tabs>
    </CSubMenu>
  )
}

export default TopNav