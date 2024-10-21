/* eslint-disable react-dom/no-missing-button-type */
import type { FC } from 'react'

import { Typography } from '@mui/material'
import React, { useState } from 'react'

import { CSubMenu } from './styles'

export interface IShopCategory {
  attributes: {
    title: string
    slug: string
  }
}

export interface IShopCategories {
  data: IShopCategory[]
}

interface IProductNav {
  shopCategories: IShopCategories
  shopName: string
  subMenu?: boolean
  category?: boolean
  mobile?: boolean
  filterProducts: (category: string) => void
}

const ProductNav: FC<IProductNav> = ({
  shopCategories,
  shopName,
  filterProducts,
  subMenu = false,
  mobile = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('')

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>, category: string) => {
    e.preventDefault()
    setActiveCategory(category)
    filterProducts(category)
  }

  return (
    <CSubMenu removeMargin={false} subMenu={subMenu} mobile={mobile}>
      <Typography variant={'h1'} sx={{ ml: 6, mb: 8 }}>
        {'Produkty od značky '}
        {shopName}
      </Typography>
      <ul>
        <li className={activeCategory === '' ? 'active' : ''}>
          <button onClick={(e) => handleFilter(e, '')}>{'Všechny'}</button>
        </li>
        {shopCategories.data.map((item) => (
          <li
            key={item.attributes.slug}
            className={activeCategory === item.attributes.slug ? 'active' : ''}
          >
            <button onClick={(e) => handleFilter(e, item.attributes.slug)}>
              {item.attributes.title}
            </button>
          </li>
        ))}
      </ul>
    </CSubMenu>
  )
}

export default ProductNav
