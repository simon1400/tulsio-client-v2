import { Typography } from '@mui/material'
import Button from 'components/Button'
import ModalNewsletter from 'components/Modal'
import { useState } from 'react'

import { NewsletterS } from './styles'

const Newsletter = ({ newsletter }: { newsletter: any }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  return (
    <NewsletterS>
      <Typography component={'p'} variant={'h1'}>
        {newsletter.title}
      </Typography>
      <Button size={'large'} white onClick={handleOpen}>
        {'Přihlásit k newsletteru'}
      </Button>
      <ModalNewsletter open={open} setOpen={setOpen} />
    </NewsletterS>
  )
}

export default Newsletter
