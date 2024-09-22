import type { FC } from 'react'

import Link from 'next/link'

import { CSubMenu } from './styles'

interface INav {
  handle: (e: any, idx: number) => void
  data: any
  subMenu?: boolean
  mobile?: boolean
  active?: number
}

const NavDictionary: FC<INav> = ({ handle, data, subMenu = false, mobile = false, active }) => {
  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile}>
      <ul>
        {data.map((item: any, idx: number) => (
          <li className={active === idx ? 'active' : ''} key={item.title}>
            <Link href={`/${item.slug}`} onClick={(e) => handle(e, idx)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </CSubMenu>
  )
}

export default NavDictionary
