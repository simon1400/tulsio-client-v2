import { useQuery } from '@apollo/client'
import navFooter from '../../queries/navFooter'
import { FooterS } from './styles'
import Newsletter from 'components/Newsletter'
import TopNav from 'components/TopNav'
import SocialNav from 'components/SocialNav'

const Footer = () => {

  const { loading, data } = useQuery(navFooter);

  console.log(data)

  return (
    <>
      <Newsletter />
      <FooterS>
        <TopNav data={data} loading={loading} type="footer" />
        <SocialNav data={data} loading={loading} type="socNav" />
      </FooterS>
    </>
  )
}

export default Footer
