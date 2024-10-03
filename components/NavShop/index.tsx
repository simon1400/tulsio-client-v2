import type { FC, ReactElement } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { CSubMenu } from './styles'

interface INav {
  data: any
  subMenu?: boolean
  category?: boolean
  mobile?: boolean
  footer?: boolean
  icon?: ReactElement
  handle: (e: any, slug: string) => void
}

const NavShop: FC<INav> = ({
  data,
  subMenu = false,
  category = false,
  mobile = false,
  icon = null,
  handle,
  footer = false,
}) => {
  const router = useRouter()
  const isCatalogPage = router.asPath.startsWith('/catalog')
  // const isProductPage = router.asPath.startsWith('/product')

  const getActiveClass = (path: string) => (router.asPath === path ? 'active' : '')

  const renderLinks = (basePath: string) =>
    data.map((item: any) => (
      <li className={getActiveClass(`${basePath}/${item.slug}`)} key={item.slug}>
        <Link href={`${basePath}/${item.slug}`}>{item.title}</Link>
      </li>
    ))

  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile} footer={footer}>
      <ul>
        {category && isCatalogPage && (
          <li className={getActiveClass('/catalog')}>
            <Link href={'/catalog'}>{'Všechny'}</Link>
          </li>
        )}

        {isCatalogPage && renderLinks('/catalog')}

        {/* {category && isProductPage && (
          <li className={getActiveClass('/product')}>
            <Link href={'/product'}>{'Všechny'}</Link>
          </li>
        )}

        {isProductPage && renderLinks('/product')} */}
      </ul>
    </CSubMenu>
  )
}

export default NavShop
