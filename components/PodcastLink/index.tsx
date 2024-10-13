import type { FC } from 'react'

import Image from 'components/Image'

import { LinkS, PodcastLinkS } from './styles'

interface IPodcastLink {
  data: IPodcastLinkItem[]
}

interface IPodcastLinkItem {
  name: string
  url: string
  logo: IImageRoot
}

const PodcastLink: FC<IPodcastLink> = ({ data }) => {
  return (
    <PodcastLinkS>
      <div>
        <span>{'Poslouchejte na '}</span>
        <ul>
          {data.map((item: IPodcastLinkItem, idx: number) => (
            <li key={item.url}>
              <LinkS href={item.url} passHref>
                <Image image={item.logo.data} width={33} height={33} alt={''} />
              </LinkS>
            </li>
          ))}
        </ul>
      </div>
    </PodcastLinkS>
  )
}

export default PodcastLink
