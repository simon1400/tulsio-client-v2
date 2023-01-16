import { FC, ReactElement } from "react"
import { ContentS } from "./styles"

interface IContent {
  children: ReactElement | ReactElement[];
  removePadding?: boolean;
  smallPadding?: boolean;
}

const Content: FC<IContent> = ({
  children,
  removePadding = false,
  smallPadding = false
}) => {
  return (
    <ContentS removePadding={removePadding} smallPadding={smallPadding}>
      {children}
    </ContentS>
  )
}

export default Content