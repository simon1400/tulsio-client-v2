import type { FC } from 'react'

import Image from 'next/image'

import { LinkS, PodcastLinkS } from './styles'

const APP_API = process.env.APP_API

interface IPodcastLink {
  data: IPodcastLinkItem[]
}

interface IPodcastLinkItem {
  name: string
  url: string
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
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
                <Image
                  src={APP_API + item.logo.data?.attributes?.url}
                  width={'33'}
                  height={'33'}
                  alt={''}
                />
              </LinkS>
            </li>
          ))}
        </ul>
      </div>
    </PodcastLinkS>
  )
}

export default PodcastLink
