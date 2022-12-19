// @ts-nocheck
import { FC, useEffect, useState } from "react"
import { useMenu, UseMenuProps } from 'react-instantsearch-hooks-web';
import Link from 'next/link'
import slugify from 'slugify'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import axios from "axios";
import qs from 'qs'
import {CSubMenu} from './styles'

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

  const {setTitle, setDescription} = props

  const { items, refine } = useMenu(props);

  const [currentRefinement, setCurrentRefinement] = useState('')

  useEffect(() => {
    if(items.length) {
      setCurrentRefinement(items.filter((item: any) => item.isRefined)[0]?.value || '')
    }
  }, [items])

  useEffect(() => {
    if(currentRefinement) {
      axios.get(`https://admin.tulsio.cz/api/categories?${query(slugify(currentRefinement, {lower: true}))}`).then(resData => {
          const resMeta = {...resData.data.data[0].attributes.meta}
          if(!resMeta.image) {
            resMeta.image = {
              data: null
            }
          }
          setTitle(resMeta.title)
          setDescription(resMeta.description)
        }).catch(err => console.log('error', err))
    }else if(!currentRefinement){
      setTitle('Blog')
      setDescription('')
    }
  }, [currentRefinement])
  
  return (
    <CSubMenu>
      <ScrollMenu 
        separatorClassName="separator-scrol" 
        scrollContainerClassName="scroll-container" 
        wrapperClassName="wrap-sub-menu"
      >
        <El 
          text="Všechny" 
          refine={refine}
          value=''
          link='/blog'
          itemId={`idx-${0}`} 
          active={currentRefinement === ''} />
        {items.map((item: any, idx: number) => <El 
          key={idx}
          text={item.label}
          refine={refine}
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