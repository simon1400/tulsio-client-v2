import { Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { FC } from "react"
import { CategoryTop } from "./styles";

const SubMenu = dynamic(() => import("../SubMenu"), {ssr: false})

interface PageHeadProps {
  title: string;
  nav?: any;
  handleChange?: (link: string) => void
  category?: boolean
}

const PageHead: FC<PageHeadProps> = ({
  title,
  nav,
  handleChange,
  category
}) => {
  return (
    <CategoryTop>
      <Container max-width="xl">

        <Typography variant="h1">{title}</Typography>

        {category && <SubMenu 
          data={nav} 
          handleChange={handleChange}
        />}

      </Container>
    </CategoryTop>
  )
}

export default PageHead