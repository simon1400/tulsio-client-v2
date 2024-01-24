import { Typography } from "@mui/material"
import { ShortContentS } from "./styled"
import { FC } from "react";

interface IShortContent {
  title: string;
  description?: string;
}

const ShortContent: FC<IShortContent> = ({
  title,
  description
}) => {
  return (
    <ShortContentS>
      <Typography variant="h2">{title}</Typography>
      {!!description && <Typography component="div" dangerouslySetInnerHTML={{ __html: description }} />}
    </ShortContentS>
  )
}

export default ShortContent