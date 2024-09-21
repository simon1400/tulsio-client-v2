import { Typography } from "@mui/material"
import ModalNewsletter from "components/Modal";
import Button from "components/Button"
import { useState } from "react";
import { NewsletterS } from "./styles"
import { useQuery } from "@apollo/client";
import globalQuery from "queries/global";
import { useRouter } from "next/router";

const Newsletter = () => {

  const router = useRouter();

  const { loading, data } = useQuery(globalQuery, {
    variables: {
      locale: router.locale,
    },
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  if (loading) {
    return <></>;
  }

  const newsletter = data.global.data.attributes.newsletter

  return <NewsletterS>
    <Typography component="p" variant="h1">{newsletter.title}</Typography>
    <Button size="large" white onClick={handleOpen}>Přihlásit k newsletteru</Button>
    <ModalNewsletter open={open} setOpen={setOpen} />
  </NewsletterS>
}

export default Newsletter