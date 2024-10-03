import type { FC } from 'react'

import { SvgIcon } from '@mui/material'
import Link from 'next/link'
import Chevron from 'public/icons/chevron.svg'

// export default Breadcrumbs
import { BreadcrumbsS } from './styles'

export interface IBreadcrumb {
  title: string
  slug: string
}

export interface IBreadcrumbs {
  color: string
  category?: IBreadcrumb
  product?: IBreadcrumb
  isCatalog?: boolean
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ category, color, product, isCatalog }) => {
  return (
    <BreadcrumbsS
      color={color}
      separator={
        <SvgIcon
          component={Chevron}
          sx={{
            fill: color,
            transform: 'rotate(-90deg)',
          }}
          fontSize={'medium'}
        />
      }
    >
      {isCatalog && <Link href={'/'}>{'Tulsio'}</Link>}
      {isCatalog && <Link href={'/catalog'}>{'Produkty'}</Link>}
      {isCatalog && category && <Link href={`/${category.slug}`}>{category.title}</Link>}
      {product && <Link href={`/product/${product.slug}`}>{product.title}</Link>}

      {!isCatalog && <Link href={'/blog'}>{'Blog'}</Link>}
    </BreadcrumbsS>
  )
}

export default Breadcrumbs
