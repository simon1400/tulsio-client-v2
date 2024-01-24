import { Typography } from "@mui/material"
import { RelatedS } from "./styled"
import dynamic from "next/dynamic";
import { FC } from "react";
const Image = dynamic(() => import("../Image"), { suspense: true });

interface IReverse {
  reverse: boolean;
  title: string;
  description: string;
}

const Related: FC<IReverse> = ({
  reverse,
  title,
  description
}) => {
  return (
    <RelatedS reverse={reverse}>
      <div className="content-wrap">
        <Typography variant="h3">{title}</Typography>
        <Typography component="div" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="img-wrap">
        <Image />
      </div>
    </RelatedS>
  )
}

export default Related