import { Typography } from "@mui/material"
import { FC } from "react"
import { GridButtonS } from "./styles"

interface IGridButton {
  data: any
}

const GridButton: FC<IGridButton> = ({
  data
}) => {
  return (
    <GridButtonS href={data.link} passHref>
      <div className="img-wrap"></div>
      <div className="content-wrap-art">
        <Typography variant="h1" component="h2">{data.title}</Typography>
      </div>
    </GridButtonS>
  )
}

export default GridButton