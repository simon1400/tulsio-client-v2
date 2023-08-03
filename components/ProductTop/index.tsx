import { Typography } from "@mui/material"
import { ProductTopS } from "./styled"
import Button from "components/Button"

import ColorLabel from "components/ColorLabel"
import Price from "components/Price";
import Rating from "components/Rating";

const ProductTop = () => {
  return (
    <ProductTopS>
      <Typography variant="h1">Skywalker 12 %</Typography>
      <div className="labels-wrap">
        <ColorLabel color="#a50d5a">asddsa</ColorLabel>
        <ColorLabel color="#99ff99">asddsa sdadg</ColorLabel>
        <ColorLabel color="#fff899">asddsa1232</ColorLabel>
      </div>
      <Rating marginBottom={30} />
      <Typography>Rostoucí popularita užívání CBD spočívá v mnoha pozitivních účincích na lidský organismus. Ale začněme pěkně popořadě. Kanabidiol je jeden z desítek typů kanabinoidů obsaženýcpočívá v mnoha pozitivních účincích na lidský organismus. Ale začněme pěkně popořadě...</Typography>
      <div className="bottom">
        <Price />
        <Button>koupit na (shopname)</Button>
      </div>
    </ProductTopS>
  )  
}

export default ProductTop