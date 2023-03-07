import { Typography } from "@mui/material";
import Label from "components/Label";
import { FC } from "react";
import { BannerS } from "./styles";

const APP_API = process.env.APP_API;

interface IBanner {
  data: any;
}

const Banner: FC<IBanner> = ({ data }) => {
  let color: string = "#202020",
    background: string = "#ffffff";

  if (data.darkMode) {
    color = "#ffffff";
    background = "#202020";
  }

  let imgUrl = `${APP_API}${data.image.data?.attributes.url}?format=webp&resize=1000x1000`;

  return (
    <BannerS
      background={background}
      color={color}
      href={data.link}
      passHref
      target="_blank"
    >
      <div className="img-wrap">
        <div
          className="img-art"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      </div>
      <div className="content-wrap-art">
        <div>
          <Typography variant="h2">
            <span>{data.title}</span>
          </Typography>
        </div>
        <div className="label-wrap">
          <Label
            data={{
              title: "Reklama",
              slug: "/tulsio-promo",
              color: "",
            }}
            color={color}
          />
        </div>
      </div>
    </BannerS>
  );
};

export default Banner;
