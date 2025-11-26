import type { FC } from 'react'

import { useRouter } from 'next/router'

import { LabelS } from './styles'
import Link from 'next/link'

export interface LabelProps {
  title: string
  navTitle?: string
  slug: string
}

export interface LabelDataProps {
  data: LabelProps
  color: string
}

const Label: FC<LabelDataProps> = ({ data, color }) => {
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/${router.locale}/${data.slug}`)
  }

  if (!data?.navTitle) {
    console.log('error: no title')
    return null
  }

  return (
    <LabelS
      color={color}
      onClick={(e) => handleClick(e)}
      as="span"
      role="link"
      tabIndex={0}
      onKeyDown={(e: any) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e)
        }
      }}
    >
      {data?.navTitle || ''}
    </LabelS>
  )
}

export default Label
