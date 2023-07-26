import { FC, ReactElement } from "react";
import { CSubMenu } from "./styles";
import Search from "public/icons/search.svg";
import Link from "next/link";

interface INav {
  data: any;
  subMenu?: boolean;
  category?: boolean;
  mobile?: boolean;
  icon?: ReactElement;
}

const Nav: FC<INav> = ({
  data,
  subMenu = false,
  category = false,
  mobile = false,
  icon = null,
}) => {
  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile}>
      <ul>
        {category && (
          <li>
            <Link href={"/blog"}>Všechny</Link>
          </li>
        )}
        {data.map((item: any, idx: number) => (
          <li key={idx}>
            <Link href={'/'+item.slug}>{item.title}</Link>
          </li>
        ))}
        {icon && (
          <li>
            <Link href={"/search"}><Search /></Link>
          </li>
        )}
      </ul>
    </CSubMenu>
  );
};

export default Nav;
