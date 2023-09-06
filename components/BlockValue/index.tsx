import { FC } from "react"
import { BlockValueS } from "./styled"

const BlockValue: FC<{value: string}> = ({value}) => {
  return (
    <BlockValueS>
      <span>{value}</span>
    </BlockValueS>
  )
}

export default BlockValue