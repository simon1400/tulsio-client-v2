import type { SyntheticEvent, FC } from 'react';
import { Container, Typography } from '@mui/material';
import Content from 'components/Content';
import Nav from 'components/Nav';
import Newsletter from 'components/Newsletter';
import SocialNav from 'components/SocialNav';
import { useRouter } from 'next/router';

import { FooterS } from './styles';

// Типизация для props
interface FooterProps {
  dataGlobal: {
    global: {
      data: {
        attributes: {
          additionalContent?: string;
          newsletter: any;
        };
      };
    };
  };
  data: {
    navigation: {
      data: {
        attributes: any;
      };
    };
  };
}

const Footer: FC<FooterProps> = ({ dataGlobal, data }) => {
  const router = useRouter();

  // Трансформация данных меню навигации
  const transformData = data?.navigation.data.attributes?.footer?.item.map(({ name, link }: {name: string; link: string}) => ({
    title: name,
    slug: link,
  }));

  // Обработчик навигации
  const handleNav = (e: SyntheticEvent, slug: string) => {
    e.preventDefault();
    router.push(slug);
  };

  // Дополнительный контент
  const additionalContent = dataGlobal?.global.data.attributes?.additionalContent;

  return (
    <>
      {additionalContent && (
        <Container maxWidth="md">
          <Content smallPadding>
            <Typography
              component="div"
              variant="body2"
              sx={{ fontSize: '13px' }} // Используем sx вместо style
              dangerouslySetInnerHTML={{
                __html: additionalContent,
              }}
            />
          </Content>
        </Container>
      )}
      <Newsletter newsletter={dataGlobal?.global.data.attributes?.newsletter || ''} />
      <FooterS>
        <Nav data={transformData} handle={handleNav} footer />
        <SocialNav data={data} />
      </FooterS>
    </>
  );
};

export default Footer;