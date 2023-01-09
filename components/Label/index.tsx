import { FC } from "react"
import { LabelS } from "./styles"

export interface LabelProps {
  title: string
  slug: string
  color: string
}

export interface LabelDataProps {
  data: LabelProps
}

const Label: FC<LabelDataProps> = ({
  data
}) => {
  return (
    <LabelS>
      {data.title}
    </LabelS>
  )
}

export default Label