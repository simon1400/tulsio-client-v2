import { FC } from "react"
import { ColorLabelS } from "./styled"

const ColorLabel: FC<{children: string; color: string}> = ({children, color}) => {
  return (
    <ColorLabelS color={color}>
      {children}
    </ColorLabelS>
  )
}

export default ColorLabel