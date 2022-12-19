import { Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { Dispatch, FC, SetStateAction } from "react"
import { CategoryTop } from "./styles";

const SubMenu = dynamic(() => import("../SubMenu"), {ssr: false})

interface PageHeadProps {
  title: string
  category?: boolean;
  setTitle?: Dispatch<SetStateAction<string>>,
  setDescription?: Dispatch<SetStateAction<string>>
}

const PageHead: FC<PageHeadProps> = ({
  title,
  category,
  setTitle,
  setDescription
}) => {
  return (
    <CategoryTop>
      <Container max-width="xl">

        <Typography variant="h1">{title}</Typography>

        {category && <SubMenu 
          attribute='categoryTitles' 
          setTitle={setTitle}
          sortBy={["name:asc"]}
          setDescription={setDescription} />}

      </Container>
    </CategoryTop>
  )
}

export default PageHead