import { Typography } from "@mui/material"
import { FC } from "react"
import { NotResultS } from "./styles"

const NotResult: FC = () => {
  return (
    <NotResultS>
      <Typography variant="h1" component="h2" textAlign="center">Nic jsme nenašli, zkuste jiné slovo.</Typography>
    </NotResultS>
  )
}

export default NotResult