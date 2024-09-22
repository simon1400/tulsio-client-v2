import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'
import Button from 'components/Button'
import ModalNewsletter from 'components/Modal'
import { useRouter } from 'next/router'
import globalQuery from 'queries/global'
import { useState } from 'react'

import { NewsletterS } from './styles'

const Newsletter = () => {
  const router = useRouter()

  const { loading, data } = useQuery(globalQuery, {
    variables: {
      locale: router.locale,
    },
  })

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  if (loading) {
    return <></>
  }

  const newsletter = data.global.data.attributes.newsletter

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
