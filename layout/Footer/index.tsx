import type { SyntheticEvent } from 'react'

import { useQuery } from '@apollo/client'
import { Container, Typography } from '@mui/material'
import Content from 'components/Content'
import Nav from 'components/Nav'
import Newsletter from 'components/Newsletter'
import SocialNav from 'components/SocialNav'
import { useRouter } from 'next/router'
import globalQuery from 'queries/global'

import navFooter from '../../queries/navFooter'

import { FooterS } from './styles'

const Footer = () => {
  const router = useRouter()
  const { loading, data } = useQuery(navFooter, {
    variables: {
      locale: router.locale,
    },
  })

  const { loading: loadingNewsletter, data: dataGlobal } = useQuery(globalQuery, {
    variables: {
      locale: router.locale,
    },
  })

  if (loading || loadingNewsletter) {
    return <footer />
  }

  const transformData = data.navigation.data.attributes.footer.item.map(
    (item: any, idx: number) => ({
      title: item.name,
      slug: item.link,
    }),
  )

  const handleNav = (e: SyntheticEvent, slug: string) => {
    e.preventDefault()
    router.push(slug)
  }

  const additionalContent = dataGlobal.global.data.attributes?.additionalContent

  return (
    <>
      {additionalContent && (
        <Container maxWidth={'md'}>
          <Content smallPadding>
            <Typography
              component={'div'}
              variant={'body2'}
              style={{ fontSize: '13px' }}
              dangerouslySetInnerHTML={{
                __html: additionalContent,
              }}
            />
          </Content>
        </Container>
      )}
      <Newsletter newsletter={dataGlobal.global.data.attributes.newsletter} />
      <FooterS>
        <Nav data={transformData} handle={handleNav} footer />
        <SocialNav data={data} loading={loading} />
      </FooterS>
    </>
  )
}

export default Footer
