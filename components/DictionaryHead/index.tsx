import { Container, Typography } from "@mui/material";
import AlphabetsSubMenu from "components/AlphabetsSubMenu";
import { FC } from "react"
import { CategoryTop } from "./styled";

interface IDictionaryHead {
  title: string;
  data: any;
}

const DictionaryHead: FC<IDictionaryHead> = ({ title, data }) => {
  return (
    <Container maxWidth="xl">
      <CategoryTop>
        <Typography variant="h1">{title}</Typography>
        <AlphabetsSubMenu data={data} />
      </CategoryTop>
    </Container>
  )
}

export default DictionaryHead