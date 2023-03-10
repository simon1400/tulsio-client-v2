import { useRouter } from "next/router"
import { FC } from "react"
import { LabelS } from "./styles"

export interface LabelProps {
  title: string
  slug: string
  color: string
}

export interface LabelDataProps {
  data: LabelProps
  color: string;
}

const Label: FC<LabelDataProps> = ({
  data,
  color
}) => {

  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('/'+data.slug)
  }

  return (
    <LabelS onClick={(e) => handleClick(e)} color={color}>
      {data.title}
    </LabelS>
  )
}

export default Label