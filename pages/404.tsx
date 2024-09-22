import type { NextPage } from 'next'

import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Button from 'components/Button'

const NotFound = styled.main(
  ({ theme }) => `
  text-align: center;
  h1{
    font-size: 369px;
    line-height: 1.15;
    ${theme.breakpoints.down('sm')} {
      font-size: 130px!important;
    }
  }
  h2{
    margin-top: -20px;
    margin-bottom: 40px;
    ${theme.breakpoints.down('sm')} {
      margin-top: 0;
    }
  }
  p{
    margin-bottom: 40px;
  }
`,
)

const CustomNotFound: NextPage = () => {
  return (
    <NotFound>
      <Typography variant={'h1'} color={'primary'} textAlign={'center'}>
        {'404'}
      </Typography>
      <Typography variant={'h1'} component={'h2'} color={'white'} textAlign={'center'}>
        {'Ups, někde se stala chyba!'}
      </Typography>
      <Typography color={'white'} textAlign={'center'}>
        {
          'Omlouváme se, ale hledanou stránku nemůžeme zobrazit! Vraťte se na hlavní stranu a zkuste'
        }
        {'štěstí znovu.'}
      </Typography>
      <Button variant={'contained'} href={'/'}>
        {'na hlavní stránku'}
      </Button>
    </NotFound>
  )
}

export default CustomNotFound
