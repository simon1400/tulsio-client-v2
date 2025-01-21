import type { FC } from 'react';
import Image from 'components/Image';

import { LinkS, SocialNavS } from './styles';

interface ISocialNav {
  data: {
    navigation: {
      data: {
        attributes: any;
      };
    };
  };
  loading?: boolean;
}

interface INavItem {
  link: string;
  background: string;
  icon: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

const SocialNav: FC<ISocialNav> = ({ data, loading }) => {
  if (loading) {
    return null;
  }

  const nav = data?.navigation?.data?.attributes?.socNav?.item || [];

  return (
    <SocialNavS>
      <ul>
        {nav.map(({ link, background, icon }: {link: string; background: string; icon: any}) => (
          <li key={link}>
            <LinkS background={background} href={link} passHref>
              <Image
                image={icon.data}
                width={25}
                height={25}
                alt={icon.data.attributes.alternativeText || 'Social Icon'}
              />
            </LinkS>
          </li>
        ))}
      </ul>
    </SocialNavS>
  );
};

export default SocialNav;