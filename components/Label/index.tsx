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
    router.push(`/cs/${data.slug}`)
  }

  if (!data?.navTitle) {
    console.log('error: no title')
    return null
  }

  return (
    <LabelS color={color} onClick={(e) => handleClick(e)} href={`/cs/${data.slug}`}>
      {data?.navTitle || ''}
    </LabelS>
  )
}

export default Label
