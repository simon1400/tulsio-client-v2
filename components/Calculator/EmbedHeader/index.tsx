import Image from 'next/image'
import { EmbedHeaderS } from './styles'
import { Typography } from '@mui/material'
import Link from 'next/link'

export const EmbedHeader = () => {
  return (
    <EmbedHeaderS>
      <Typography variant={'h1'}>{'CBD kalkulačka'}</Typography>
      <div className={'embed-logo'}>
        <Link href={'/'} target='_blank'>
          <Image src={'/assets/logo-tulsio.svg'} width={'211'} height={'61'} alt={'Tulsio'} />
        </Link>
      </div>
    </EmbedHeaderS>
  )
}