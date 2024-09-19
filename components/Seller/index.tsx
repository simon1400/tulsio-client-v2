import SellerLogo from "components/Logo";
import { SellerS } from "./styled";
import Link from "next/link";
import { Typography } from "@mui/material";
import Rating from "components/Rating";
import Button from "components/Button";
import { IImageRoot } from "types/image";
import { FC } from "react";
import Image from "next/image";
import Grid from "@mui/material";
const APP_API = process.env.APP_API;

export interface ISellerItem {
  title: string;
  slug: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  description: string;
  rating: string;
  web: string;
}

const Seller: FC<{ sellers: ISellerItem }> = ({ sellers }) => {
  return (
    <SellerS>
      <div className="seller-head">
        <div className="logo-wrap">
          <SellerLogo image={sellers.logo} />
          <Typography variant="h4">{sellers.title}</Typography>
        </div>
        <Rating />
      </div>
      <Typography>
        {/* <p>
          CBD (kanabidiol) je po známějším THC druhý nejrozšířenější kanabinoid,
          který obsahuje rostlina konopí. Pro blahodárný vliv bez žádných
          omamných účinků se získává na výrobu olejů, tinktur či prášků a jeho
          květy se kouří s čím dál větší oblibou.
        </p> */}
        {sellers.description}
      </Typography>
      <div className="button">
        <Link href={`/shop/${sellers.slug}`}>
          <Button>více o prodejci {sellers.title}</Button>
        </Link>
      </div>
    </SellerS>
  );
};

export default Seller;
