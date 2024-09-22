import type { FC } from 'react'

import { Typography } from '@mui/material'
import Image from 'components/Image'
import DOMPurify from 'isomorphic-dompurify'
import TriangleAlert from 'public/assets/triangle-alert.svg'

import { InfoBlockS } from './styled'

interface IInfoBlock {
  title: string
  description: string
  alert?: boolean
  icon?: string
}

const InfoBlock: FC<IInfoBlock> = ({ alert = false, title, description, icon }) => {
  return (
    <InfoBlockS>
      <Typography variant={'h3'}>
        {alert && <TriangleAlert />}
        {icon && <Image url={icon} width={33} height={33} alt={'Ikon'} />}
        {title}
      </Typography>
      <Typography
        component={'div'}
        variant={'body2'}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      />
    </InfoBlockS>
  )
}

export default InfoBlock
