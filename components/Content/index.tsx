import { FC, ReactElement } from "react"
import { ContentS } from "./styles"

interface IContent {
  children: ReactElement | ReactElement[];
  removePadding?: boolean;
}

const Content: FC<IContent> = ({
  children,
  removePadding = false
}) => {
  return (
    <ContentS removePadding={removePadding}>
      {children}
    </ContentS>
  )
}

export default Content