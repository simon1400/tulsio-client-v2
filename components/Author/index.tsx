import type { FC } from 'react'

import { Typography } from '@mui/material'
import Logo from 'components/Logo'
import DOMPurify from 'isomorphic-dompurify'

import { AuthorS, Name } from './styles'
// import SocialNav from "components/SocialNav"

const Author: FC<{ data: any }> = ({ data }) => {
  return (
    <AuthorS>
      <div className={'author-top'}>
        <Name>
          <Logo image={data.image} />
          <span>{data.name}</span>
        </Name>
        {/* <SocialNav data={data} loading={loading} /> */}
      </div>
      <Typography dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.description) }} />
    </AuthorS>
  )
}

export default Author
