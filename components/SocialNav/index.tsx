import { FC } from "react";
import { LinkS, SocialNavS } from "./styles"

const APP_API = process.env.APP_API

interface SocialNav {
  data: any;
  loading: boolean;
  type: string;
}

const SocialNav: FC<SocialNav> = ({
  data,
  loading,
  type
}) => {

  if(loading) {
    return null
  }

  const nav = data.navigation.data.attributes.socNav.item

  return <SocialNavS>
    <ul>
      {nav.map((item: any, idx: number) => <li key={idx}>
        <LinkS background={item.background} href={item.link} passHref >
          <img src={APP_API+item.icon.data.attributes.url} />
        </LinkS>
      </li>)}
    </ul>
  </SocialNavS>
}

export default SocialNav