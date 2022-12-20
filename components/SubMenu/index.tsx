// @ts-nocheck
import { FC, useEffect, useState } from "react"
import { useMenu, UseMenuProps } from 'react-instantsearch-hooks-web';
import Link from 'next/link'
import slugify from 'slugify'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import axios from "axios";
import qs from 'qs'
import {CSubMenu} from './styles'
import { useRouter } from "next/router";
import Head from "next/head";

const query = (slug: string) => qs.stringify({
  filters: {
    slug: {
      $eq: slug,
    },
  },
  populate: {
    meta: {
      fields: ['title', 'description'],
    },
  },
})

interface ISubMenu extends UseMenuProps {
  setTitle: any,
  setDescription: any
}

const SubMenu: FC<ISubMenu> = (props) => {

  const {setTitle} = props

  const { items, refine } = useMenu(props);
  const router = useRouter()

  const [titleHead, setTitleHead] = useState('')
  const [description, setDescription] = useState('')

  const changeCotnent = (value) => {
    if(value.length) {
      axios.get(`https://admin.tulsio.cz/api/categories?${query(slugify(value, {lower: true}))}`).then(resData => {
        const resMeta = {...resData.data.data[0].attributes.meta}
        if(!resMeta.image) {
          resMeta.image = {
            data: null
          }
        }
        setTitle(resMeta.title)
        setTitleHead(resMeta.title+' | Tulsio')
        setDescription(resMeta.description)
        refine(value)
      }).catch(err => console.log('error', err))
    }else{
      setTitle('Blog')
      setDescription('')
      refine('')
    }
  }

  useEffect(() => {
    if(router.query.category !== 'blog') {
      axios.get(`https://admin.tulsio.cz/api/categories?${query(router.query.category)}`).then(resData => {
        const resMeta = {...resData.data.data[0].attributes.meta}
        if(!resMeta.image) {
          resMeta.image = {
            data: null
          }
        }
        setTitle(resMeta.title)
        setTitleHead(resMeta.title+' | Tulsio')
        setDescription(resMeta.description)
        const itemCurr = items.filter((item: any) => slugify(item.value, {lower: true}) === router.query.category)[0].value
        refine(itemCurr)
      }).catch(err => console.log('error', err))
    }else{
      setTitle('Blog')
      setDescription('')
    }
  }, [items.length])

  return (
    <CSubMenu>
      <Head>
        <title>{titleHead}</title>
        <meta property="og:title" content={titleHead} />
        <meta itemProp="name" content={titleHead} />
        <meta itemProp="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <ScrollMenu 
        separatorClassName="separator-scrol" 
        scrollContainerClassName="scroll-container" 
        wrapperClassName="wrap-sub-menu"
      >
        <El 
          text="Všechny" 
          refine={changeCotnent}
          value=''
          link='/blog'
          itemId={`idx-${0}`} 
          active={router.query.category === 'blog'} />
        {items.map((item: any, idx: number) => <El 
          key={idx}
          text={item.label}
          refine={changeCotnent}
          value={item.value}
          link={slugify(item.value, {lower: true})} 
          itemId={`${idx+1}`} 
          active={item.isRefined} />)}
      </ScrollMenu>
    </CSubMenu>
  )
}

interface IEl {
  text: string;
  itemId: string;
  active: boolean;
  link: string;
  refine: (value: string) => void;
  value: string;
}

const El = ({text, link, itemId, active, refine, value}: IEl) => {
  return (
    <div itemID={itemId} className={`menu-item${active ? ' active' : ''}`}>
      <Link href={link} onClick={() => refine(value)} shallow>
        {text}
      </Link>
    </div>
  )
}

export default SubMenu