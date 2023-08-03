import Image from "next/image"
import { SellerLogoS } from "./styled"

const SellerLogo = () => {
  return (
    <SellerLogoS>
      <Image src="/assets/seller-logo.svg" fill alt="" />
    </SellerLogoS>
  )
}

export default SellerLogo