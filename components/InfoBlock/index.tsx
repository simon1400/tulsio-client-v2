import { Typography } from "@mui/material"
import { InfoBlockS } from "./styled"
import { FC } from "react";

import TriangleAlert from "public/assets/triangle-alert.svg";

interface IInfoBlock {
  title: string;
  description: string;
  alert?: boolean
}

const InfoBlock: FC<IInfoBlock> = ({
  alert = false,
  title,
  description
}) => {
  return (
    <InfoBlockS>
      <Typography variant="h3">{alert && <TriangleAlert />} {title}</Typography>
      <Typography component="div" variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
    </InfoBlockS>
  )
}

export default InfoBlock