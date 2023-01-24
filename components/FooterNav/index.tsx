import { useRouter } from "next/router"
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { CSubMenu, TabS } from "components/SubMenu/styles";
import { Tabs, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

export interface IFooterNav {
  data: any
  loading: boolean;
}

const FooterNav: FC<IFooterNav> = ({
  data, 
  loading
}) => {

  const router = useRouter()

  const [value, setValue] = useState<number | boolean>(false);

  useEffect(() => {
    if(data?.navigation) {
      if(data.navigation.data.attributes.footer.item.length) {
        const idx = data.navigation.data.attributes.footer.item.findIndex((el: any) => el.link === router.asPath)
        setValue(idx >= 0 ? idx : false)
      }
    }
  }, [data, router])

  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down("md"))

  if(loading) {
    return <></>
  }

  const transformData = data.navigation.data.attributes.footer.item.map((item: any, idx: number) => ({
    title: item.name,
    slug: item.link
  }))

  const handle = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    router.push(transformData[idx].slug)
  };

  return (
    <CSubMenu removeMargin>
      <Tabs value={value} onChange={handle} orientation={md ? "vertical" : "horizontal"}>
        {transformData.map((item: any, idx: number) => <TabS key={idx} label={item.title} />)}
      </Tabs>
    </CSubMenu>
  )
}

export default FooterNav