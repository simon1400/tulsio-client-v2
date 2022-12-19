import Link from 'next/link'
import globalQuery from '../../queries/global'
import { useQuery } from '@apollo/client'
import navFooter from '../../queries/navFooter'
import dynamic from 'next/dynamic'

// const Newsletter = dynamic(() => import('../../components/Newsletter'), {suspense: true}) 
const Image = dynamic(() => import('../../components/Image'), {suspense: true}) 

const Footer = () => {

  const {loading, data} = useQuery(globalQuery)

  const { loading: navLoad, data: navData } = useQuery(navFooter);

  if(loading || navLoad) {
    return <></>
  }

  const nav = navData.navigation.data.attributes
  const newsletter = data.global.data.attributes.newsletter

  return (
    <footer>
      {/* <div className="footer-top">
        <div className="uk-container uk-container-large">
          <Newsletter title={newsletter.title} />
        </div>
      </div> */}
      <div className="footer-bottom">
        <div className="uk-container uk-container-large">
          <div className="footer-bottom-wrap">
            <div className="logo">
              <img className="uk-svg" hidden src="/assets/logo-tulsio.svg" uk-svg="" />
            </div>
            {!!nav.footerNav_1 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_1.title}</li>
                {nav.footerNav_1.item.map((item: any, index: number) => <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.footerNav_2 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_2.title}</li>
                {nav.footerNav_2.item.map((item: any, index: number) => <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.footerNav_3 && <nav className="menu">
              <ul>
                <li className="title">{nav.footerNav_3.title}</li>
                {nav.footerNav_3.item.map((item: any, index: number) => <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>)}
              </ul>
            </nav>}
            {!!nav.socNav.item.length && <div className="social">
              <ul>
                {nav.socNav.item.map((item: any, index: number) => <li key={index}>
                  <Link href={item.link}>
                    <Image image={item.icon.data} svg />
                  </Link>
                </li>)}
              </ul>
            </div>}
          </div>
        </div>
      </div>
      {/* <ModalNewsletter /> */}
    </footer>
  )
}

export default Footer
