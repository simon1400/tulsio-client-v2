import { useQuery } from '@apollo/client'
import navFooter from '../../queries/navFooter'
import { FooterS } from './styles'
import Newsletter from 'components/Newsletter'
import SocialNav from 'components/SocialNav'
import FooterNav from 'components/FooterNav'

const Footer = () => {

  const { loading, data } = useQuery(navFooter);

  return (
    <>
      <Newsletter />
      <FooterS>
        <FooterNav data={data} loading={loading} />
        <SocialNav data={data} loading={loading} type="socNav" />
      </FooterS>
    </>
  )
}

export default Footer
