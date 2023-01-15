import { FC } from "react"
import { BannerS } from "./styles"

const APP_API = process.env.APP_API

interface IBanner {
  data: any
}

const Banner: FC<IBanner> = ({
  data
}) => {

  let imgUrl = `${APP_API}${data.image.data.attributes.url}?format=webp&resize=1000x1000`

  return <BannerS href={data.link} passHref>
    <div className="img-wrap">
      <div className="img-art" style={{backgroundImage: `url(${imgUrl})`}} />
    </div>
  </BannerS>
}

export default Banner