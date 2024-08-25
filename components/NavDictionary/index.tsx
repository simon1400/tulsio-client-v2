import { FC } from "react";
import { CSubMenu } from "./styles";
import Link from "next/link";

interface INav {
  handle: (e: any, idx: number) => void;
  data: any;
  subMenu?: boolean;
  mobile?: boolean;
  active?: number;
}

const NavDictionary: FC<INav> = ({
  handle,
  data,
  subMenu = false,
  mobile = false,
  active
}) => {
  return (
    <CSubMenu removeMargin={!subMenu} subMenu={subMenu} mobile={mobile}>
      <ul>
        {data?.map((item: any, idx: number) => (
          <li className={active === idx ? "active" : ""} key={idx}>
            <Link href={'/'+item.slug} onClick={e => handle(e, idx)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </CSubMenu>
  );
};

export default NavDictionary;
