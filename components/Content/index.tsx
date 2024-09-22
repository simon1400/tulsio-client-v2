import type { FC, ReactElement } from 'react'

import { ContentS } from './styles'

interface IContent {
  children: ReactElement | ReactElement[]
  removePadding?: boolean
  smallPadding?: boolean
  id?: string
}

const Content: FC<IContent> = ({
  children,
  removePadding = false,
  smallPadding = false,
  id = '',
}) => {
  return (
    <ContentS id={id} removePadding={removePadding} smallPadding={smallPadding}>
      {children}
    </ContentS>
  )
}

export default Content
