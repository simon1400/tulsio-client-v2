import { Typography } from "@mui/material"
import ModalNewsletter from "components/Modal";
import Button from "components/Button"
import { useState } from "react";
import { NewsletterS } from "./styles"

const Newsletter = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return <NewsletterS>
    <Typography component="p" variant="h1">Všechno co se ve světě CBD děje ve vašem mailu.</Typography>
    <Button size="large" white onClick={handleOpen}>Přihlásit k newsletteru</Button>
    <ModalNewsletter open={open} setOpen={setOpen} />
  </NewsletterS>
}

export default Newsletter