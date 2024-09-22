import type { FC } from 'react'

import { GridButtonS } from './styles'

interface IGridButton {
  data: any
}

const GridButton: FC<IGridButton> = ({ data }) => {
  return (
    <GridButtonS href={data.link} passHref>
      <div className={'img-wrap'} />
      <div className={'content-wrap-art'}>
        <div className={'marquee marquee--fit-content'}>
          <ul className={'marquee__content'}>
            <li>{data.title}</li>
          </ul>

          <ul aria-hidden={'true'} className={'marquee__content'}>
            <li>{data.title}</li>
          </ul>
        </div>
      </div>
    </GridButtonS>
  )
}

export default GridButton
