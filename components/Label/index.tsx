import { FC } from "react"
// import { useRouter } from "next/router"

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

  // const router = useRouter()

  // const handleLink = (e: any) => {
  //   e.preventDefault()
  //   router.push(data.slug)
  // }

  return (
    <label className={`label ${data.color}`}>
      {data.title}
    </label>
  )
}

export default Label