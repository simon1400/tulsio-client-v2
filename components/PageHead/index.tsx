import { Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react"
import { CategoryTop } from "./styles";

const SubMenu = dynamic(() => import("../SubMenu"), {ssr: false})

interface PageHeadProps {
  title: string;
  category?: boolean
  center?: boolean
  prefix?: string
}

const PageHead: FC<PageHeadProps> = ({
  title,
  category,
  center,
  prefix
}) => {
  return (
    <CategoryTop>
      <Container max-width="xl">

        <Typography textAlign={center ? 'center' : 'left'} variant="h1">
          {prefix ? <span>{prefix}</span> : ''}
          {title}
        </Typography>

        {category && <SubMenu />}

      </Container>
    </CategoryTop>
  )
}

export default PageHead