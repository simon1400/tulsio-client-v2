import { Rating } from "@mui/material"
import { RatingS } from "./styled"
import StarIcon from '@mui/icons-material/Star';
import { FC } from "react";

const RatingComponent: FC<{marginBottom?: number, marginTop?: number}> = ({marginBottom, marginTop}) => {
  return (
    <RatingS marginBottom={marginBottom} marginTop={marginTop}>
      <div>4.2</div>
      <Rating name="read-only" value={2} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
    </RatingS>
  )
}

export default RatingComponent