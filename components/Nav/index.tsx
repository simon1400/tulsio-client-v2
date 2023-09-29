import { FC, ReactElement } from "react";
import { CSubMenu } from "./styles";
import Search from "public/icons/search.svg";
import Link from "next/link";
import { useRouter } from "next/router";

interface INav {
  data: any;
  subMenu?: boolean;
  category?: boolean;
  mobile?: boolean;
  footer?: boolean;
  icon?: ReactElement;
  handle: (e: any, slug: string) => void;
}

const Nav: FC<INav> = ({
  data,
  subMenu = false,
  category = false,
  mobile = false,
  icon = null,
  handle,
  footer = false
}) => {
  const router = useRouter()
  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile} footer={footer}>
      <ul>
        {category && (
          <li className={router.asPath === '/blog' || router.asPath === '/tags' ? "active" : ""}>
            <Link href="/blog" onClick={(e) => handle(e, "/blog")}>Všechny</Link>
          </li>
        )}
        {data.map((item: any, idx: number) => (
          <li className={router.asPath === '/'+item.slug || router.asPath === item.slug ? "active" : ""} key={idx}>
            <Link href={'/'+item.slug} onClick={(e) => handle(e, item.slug)}>{item.title}</Link>
          </li>
        ))}
        {icon && (
          <li>
            <Link href="/search" onClick={(e) => handle(e, "/search")}><Search /></Link>
          </li>
        )}
      </ul>
    </CSubMenu>
  );
};

export default Nav;
