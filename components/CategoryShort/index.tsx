import { FC } from "react"
import { CategoryDescriptionS } from "./styles"
import { Typography } from "@mui/material"

interface ICategoryShort {
  data: any
}

const CategoryShort: FC<ICategoryShort> = ({
  data
}) => {
  
  return (
    <CategoryDescriptionS>
      <div className="img-wrap"></div>
      <div className="content-wrap-art">
        <Typography variant="h2">{data.title}</Typography>
        <Typography dangerouslySetInnerHTML={{__html: data.description}} />
      </div>
    </CategoryDescriptionS>
  )
}

export default CategoryShort