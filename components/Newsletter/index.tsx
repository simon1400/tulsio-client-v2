import { Typography } from "@mui/material"
import { NewsletterS, WhiteButton } from "./styles"

const Newsletter = () => {
  return <NewsletterS>
    <Typography component="p" variant="h1">Všechno co se ve světě CBD děje ve vašem mailu.</Typography>
    <WhiteButton size="large">Příhlásit k newsletru</WhiteButton>
  </NewsletterS>
}

export default Newsletter