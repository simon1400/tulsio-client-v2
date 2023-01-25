import { Typography } from "@mui/material"
import ModalNewsletter from "components/Modal";
import WhiteButton from "components/WhiteButton"
import { useState } from "react";
import { NewsletterS } from "./styles"

const Newsletter = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return <NewsletterS>
    <Typography component="p" variant="h1">Všechno co se ve světě CBD děje ve vašem mailu.</Typography>
    <WhiteButton size="large" onClick={handleOpen}>Příhlásit k newsletru</WhiteButton>
    <ModalNewsletter open={open} setOpen={setOpen} />
  </NewsletterS>
}

export default Newsletter