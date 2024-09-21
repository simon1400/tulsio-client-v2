import { Typography } from "@mui/material"
import { RelatedS } from "./styled"
import dynamic from "next/dynamic";
import { FC } from "react";
import { IImageRoot } from "types/image";
import { choiceBackground } from "helpers/choiseBackground";
const Image = dynamic(() => import("../Image"), { suspense: true });

interface IReverse {
  reverse: boolean;
  title: string;
  description: string;
  background: string;
  image: IImageRoot
}

const APP_API = process.env.APP_API

const Related: FC<IReverse> = ({
  reverse,
  title,
  description,
  image,
  background
}) => {
  const {convert, color} = choiceBackground(background)
  return (
    <RelatedS reverse={reverse} background={convert} colorText={color}>
      <div className="content-wrap">
        <Typography variant="h3">{title}</Typography>
        <Typography component="div" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="img-wrap">
        <Image url={APP_API+image.data.attributes.url} />
      </div>
    </RelatedS>
  )
}

export default Related