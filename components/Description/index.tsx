import { Typography } from '@mui/material'

import { DescriptionS } from './styled'

const Description = () => {
  return (
    <DescriptionS>
      <div className={'img-wrap'} />
      <div className={'content-wrap-art'}>
        <Typography variant={'h2'}>{'popis category blogu'}</Typography>
        <Typography>
          {
            'Rostoucí popularita užívání CBD spočívá v mnoha pozitivních účincích na lidský organismus.'
          }
          {
            'Ale začněme pěkně popořadě. Kanabidiol je jeden z desítek typů kanabinoidů obsažených v'
          }
          {
            'konopí. Ty v určité míře obsahuje i lidské tělo a po užití CBD spolu reagují. Jejich vliv'
          }
          {'je prospěšný zejména pro zklidnění mysli, tlumení bolesti protizánětlivý vliv.Rostoucí'}
          {
            'popularita užívání CBD spočívá v mnoha pozitivních účincích na lidský organismus. Ale začn'
          }
        </Typography>
      </div>
    </DescriptionS>
  )
}

export default Description
