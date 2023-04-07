
import { FC } from "react";
import { BannerS } from "./styles";
import Image from "next/image";

const APP_API = process.env.APP_API;

interface IBanner {
  data: any;
}

const BannerStatic: FC<IBanner> = ({ data }) => {

  let imgUrl = `${APP_API}${data.image.data?.attributes.url}?format=webp&resize=1000x1000`;

  return (
    <BannerS
      href={data.link}
      passHref
      target="_blank"
    >
      <div className="img-wrap">
        <Image src={imgUrl} fill alt={"Banner"}/>
      </div>
      <div className="content-wrap-art">
        <div></div>
      </div>
    </BannerS>
  );
};

export default BannerStatic;
