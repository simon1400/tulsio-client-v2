import type { FC, ReactElement } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchIcon from 'public/icons/search.svg'

import { CSubMenu } from './styles'

interface INavItem {
  slug: string
  title: string
}

interface INav {
  data: INavItem[]
  subMenu?: boolean
  category?: boolean
  mobile?: boolean
  footer?: boolean
  icon?: ReactElement
  handle: (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => void
}

const Nav: FC<INav> = ({
  data,
  subMenu = false,
  category = false,
  mobile = false,
  footer = false,
  icon = null,
  handle,
}) => {
  const router = useRouter()

  const isActive = (slug: string): boolean => router.asPath === `/${slug}` || router.asPath === slug

  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile} footer={footer}>
      <ul>
        {category && (
          <li className={router.asPath === '/blog' || router.asPath === '/tags' ? 'active' : ''}>
            <Link href={'/blog'} onClick={(e) => handle(e, '/blog')}>
              {'Všechny'}
            </Link>
          </li>
        )}
        {!!data?.length &&
          data.map(({ slug, title }) => {
            return (
              <li className={isActive(slug) ? 'active' : ''} key={title}>
                <Link href={slug} onClick={(e) => handle(e, slug)}>
                  {title}
                </Link>
              </li>
            )
          })}
        {icon && (
          <li>
            <Link href={'/search'} onClick={(e) => handle(e, '/search')}>
              <SearchIcon />
            </Link>
          </li>
        )}
      </ul>
    </CSubMenu>
  )
}

export default Nav
