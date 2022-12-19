import router from "next/router"
import Link from "next/link"
import { FC } from "react"
import { connectHits } from "react-instantsearch-core";
import closeCanvas from "../../helpers/closeCanvas";

export interface INavItem {
  id: string
  title: string
  link: string
}

export interface ITopNav {
  hits?: INavItem[]
  mobile?: boolean
  menu?: boolean
}

const Menu: FC<ITopNav> = ({ hits }) => {

  return (
    <div id="responsive-nav" className="uk-offcanvas canvas" uk-offcanvas="flip: true; overlay: true">
      {/* <div className="uk-offcanvas-bar">
        <div className="canvas-head">
          <h3></h3>
          <Link href="/" onClick={e => closeCanvas(e, '#responsive-nav')}>
            <img className="uk-svg" hidden src="/assets/times.svg" uk-svg="" />
            <svg></svg>
          </Link>
        </div>
        <nav className="menu-responsive">
          <ul>
            {hits.map(item => <li key={item.id}>
              <Link href={item.link} className={item.link === router.asPath ? 'active' : ''}>
                {item.title}
              </Link>
            </li>)}
          </ul>
        </nav>
      </div> */}
    </div>
  )
}

export default Menu