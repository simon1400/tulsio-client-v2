import SellerLogo from "components/SellerLogo"
import { SellerS } from "./styled"
import { Typography } from "@mui/material"
import Rating from "components/Rating"
import Button from "components/Button"

const Seller = () => {
  return (
    <SellerS>
      <div className="seller-head">
        <div className="logo-wrap">
          <SellerLogo />
          <Typography variant="h4">Shop name</Typography>
        </div>
        <Rating />
      </div>
      <Typography>
        <p>CBD (kanabidiol) je po známějším THC druhý nejrozšířenější kanabinoid, který obsahuje rostlina konopí. Pro blahodárný vliv bez žádných omamných účinků se získává na výrobu olejů, tinktur či prášků a jeho květy se kouří s čím dál větší oblibou.</p>
      </Typography>
      <Button>více o prodejci shop name</Button>
    </SellerS>
  )
}

export default Seller