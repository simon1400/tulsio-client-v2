import type { FC } from 'react'

import Image from 'components/Image'

import { LinkS, SocialNavS } from './styles'

interface ISocialNav {
  data: {
    navigation: {
      data: {
        attributes: {
          socNav: { item: INavItems[] }
        }
      }
    }
  }
  loading: boolean
}

interface INavItems {
  link: string
  background: string
  icon: IImageRoot
}

const SocialNav: FC<ISocialNav> = ({ data, loading }) => {
  if (loading) {
    return null
  }

  const nav: INavItems[] = data.navigation.data.attributes.socNav.item

  return (
    <SocialNavS>
      <ul>
        {nav.map((item: INavItems) => (
          <li key={item.link}>
            <LinkS background={item.background} href={item.link} passHref>
              <Image image={item.icon.data} width={25} height={25} alt={''} />
            </LinkS>
          </li>
        ))}
      </ul>
    </SocialNavS>
  )
}

export default SocialNav
