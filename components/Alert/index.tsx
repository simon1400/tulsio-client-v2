import { Alert, AlertTitle, Typography } from "@mui/material"
import { FC } from "react"
import { AlertS } from "./styles"

interface ICustomAlert {
  type?: 'success' | 'info' | 'warning' | 'error';
  title: string;
  content: string;
}

const CustomAlert: FC<ICustomAlert> = ({
  type = 'success',
  title,
  content
}) => {
  return (
    <AlertS severity={type}>
      <AlertTitle>{title}</AlertTitle>
      <Typography>{content}</Typography>
    </AlertS>
  )
}

export default CustomAlert