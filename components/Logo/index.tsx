import Image from "next/image"
import { SellerLogoS } from "./styled"
import { FC } from "react"

const APP_API = process.env.APP_API

const Logo: FC<{image: any}> = ({image}) => {

  return (
    <SellerLogoS>
      <Image src={APP_API+image.data.attributes.url+`?format=webp&resize=80x80`} fill alt="" />
    </SellerLogoS>
  )
}

export default Logo