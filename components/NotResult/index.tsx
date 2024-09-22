import type { FC } from 'react'

import { Typography } from '@mui/material'

import { NotResultS } from './styles'

const NotResult: FC = () => {
  return (
    <NotResultS>
      <Typography variant={'h1'} component={'h2'} textAlign={'center'}>
        {'Nic jsme nenašli, zkuste jiné slovo.'}
      </Typography>
    </NotResultS>
  )
}

export default NotResult
