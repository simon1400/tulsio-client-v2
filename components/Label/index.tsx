import type { FC } from 'react'

import { useRouter } from 'next/router'

import { LabelS } from './styles'

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
    router.push(`/${data.slug}`)
  }

  return (
    <LabelS onClick={(e) => handleClick(e)} color={color}>
      {data.navTitle}
    </LabelS>
  )
}

export default Label
