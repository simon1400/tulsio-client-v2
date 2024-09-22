import type { SyntheticEvent } from 'react'

import { useQuery } from '@apollo/client'
import Nav from 'components/Nav'
import Newsletter from 'components/Newsletter'
import SocialNav from 'components/SocialNav'
import { useRouter } from 'next/router'

import navFooter from '../../queries/navFooter'

import { FooterS } from './styles'

const Footer = () => {
  const router = useRouter()
  const { loading, data } = useQuery(navFooter, {
    variables: {
      locale: router.locale,
    },
  })

  if (loading) {
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

  return (
    <>
      <Newsletter />
      <FooterS>
        <Nav data={transformData} handle={handleNav} footer />
        <SocialNav data={data} loading={loading} />
      </FooterS>
    </>
  )
}

export default Footer
