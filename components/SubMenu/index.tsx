import { FC, SyntheticEvent, useEffect, useState } from "react"
import {CSubMenu, TabS} from './styles'
import { useRouter } from "next/router";
import { Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "stores/fetch/dataFetch";
import { changeActiveCategoryNav, selectActiveCategoryNav } from "stores/slices/activeSlices";
import { selectCategoryNav } from "stores/slices/navSlices";

interface ISubMenu {}

const SubMenu: FC<ISubMenu> = () => {

  const router = useRouter()
  const nav = useSelector(selectCategoryNav)
  const dispatch = useDispatch();

  const [value, setValue] = useState(0)

  useEffect(() => {
    if(nav.length && router.query.category !== 'blog') {
      setValue(nav.findIndex((el: any) => el.slug === router.query.category)+1)
    }else{
      setValue(0)
    }
  }, [router.query])

  const handle = (e: SyntheticEvent, idx: number) => {
    if(idx === 0) {
      router.push('blog')
    }else{
      router.push(nav[idx-1].slug)
      // @ts-ignore
      dispatch(fetchAllArticles(nav[idx-1].slug))
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
        {nav.map((item: any, idx: number) => <TabS key={idx} label={item.title} />)}
      </Tabs>
    </CSubMenu>
  )
}

export default SubMenu