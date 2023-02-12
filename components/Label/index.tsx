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

  return (
    <LabelS href={data.slug} passHref color={color}>
      {data.title}
    </LabelS>
  )
}

export default Label