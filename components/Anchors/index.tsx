import type { FC, SyntheticEvent } from 'react'

import ArrowDown from 'public/icons/arrow-2.svg'

import { AnchorsS } from './styles'

const Anchors: FC<{ data: any }> = ({ data }) => {
  const handleMenu = (e: SyntheticEvent, item: any) => {
    e.preventDefault()
    const element = document.getElementById(item.idTarget.toLowerCase().split(' ').join('-'))
    const headerOffset = 80
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AnchorsS>
      <ul>
        {!!data?.length &&
          data.map((item: any, idx: number) => {
            if (item.idTarget) {
              return (
                <li key={item.idTarget}>
                  <a
                    href={`#${item.idTarget.toLowerCase().split(' ').join('-')}`}
                    onClick={(e) => handleMenu(e, item)}
                  >
                    <span>
                      <ArrowDown />
                    </span>
                    <span>{item.idTarget}</span>
                  </a>
                </li>
              )
            }
            return null
          })}
      </ul>
    </AnchorsS>
  )
}

export default Anchors
