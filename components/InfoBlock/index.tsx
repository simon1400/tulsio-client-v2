import { Typography } from "@mui/material"
import { InfoBlockS } from "./styled"
import { FC } from "react";

interface IInfoBlock {
  title: string;
  description: string;
}

const InfoBlock: FC<IInfoBlock> = ({
  title,
  description
}) => {
  return (
    <InfoBlockS>
      <Typography variant="h3">{title}</Typography>
      <Typography component="div" variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
    </InfoBlockS>
  )
}

export default InfoBlock