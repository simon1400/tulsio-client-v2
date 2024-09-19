import { Rating } from "@mui/material"
import { RatingS } from "./styled"
import StarIcon from '@mui/icons-material/Star';
import { FC } from "react";

const RatingComponent: FC<{marginBottom?: number, marginTop?: number, rating: string, showNumber?: boolean;}> = ({marginBottom, marginTop, rating, showNumber = true }) => {
  return (
    <RatingS marginBottom={marginBottom} marginTop={marginTop}>
      {showNumber && <div>{rating}</div>}
      <Rating name="read-only" value={parseFloat(rating)} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
    </RatingS>
  )
}

export default RatingComponent