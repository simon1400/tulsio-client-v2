import { useRouter } from "next/router"
import Link from 'next/link'
import { FC } from "react";
import { ITopNav } from "../../layout/Menu";
import navHeader from "queries/navHeader";
import { useQuery } from "@apollo/client";
import { Nav } from "./styles";

const TopNav: FC<ITopNav> = ({ mobile, menu }) => {

  const router = useRouter()

  const {data, loading} = useQuery(navHeader)

  if(loading) {
    return <></>
  }

  return (
    <Nav>
      <ul>
        {data.navigation.data.attributes.topNav.item.map((item: any, idx: number) => <li key={idx}>
          <Link href={item.link} className={item.link === router.asPath ? 'active' : ''}>
            {item.name}
          </Link>
        </li>)}
      </ul>
    </Nav>
  )
}

export default TopNav