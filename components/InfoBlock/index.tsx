import { Typography } from "@mui/material"
import { InfoBlockS } from "./styled"
import { FC } from "react";

import TriangleAlert from "public/assets/triangle-alert.svg";
import Image from "next/image";

interface IInfoBlock {
  title: string;
  description: string;
  alert?: boolean
  icon?: string
}

const APP_API = process.env.APP_API

const InfoBlock: FC<IInfoBlock> = ({
  alert = false,
  title,
  description,
  icon
}) => {
  return (
    <InfoBlockS>
      <Typography variant="h3">
        {alert && <TriangleAlert />}
        {icon && <Image src={APP_API+icon} width={33} height={33} alt="Ikon" />}
        {title}
      </Typography>
      <Typography component="div" variant="body2" dangerouslySetInnerHTML={{ __html: description }} />
    </InfoBlockS>
  )
}

export default InfoBlock