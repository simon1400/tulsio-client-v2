import Image from "next/image"
import { CardS } from "./styled"
import { Typography } from "@mui/material"
import AngleRight from '/public/assets/angle-right.svg'
import Link from "next/link"

const Card = () => {
  return (
    <CardS>
      <div className="img-wrap">
        <Image src="/assets/shop.png" fill alt="" />
      </div>
      <div className="card-content">
        <Typography variant="h3">SKYWALKER 12 %</Typography>
        <div className="card-control">
          <Typography>560 kc</Typography>
          <Link href="/"><AngleRight /></Link>
        </div>
      </div>
    </CardS>
  )
}

export default Card