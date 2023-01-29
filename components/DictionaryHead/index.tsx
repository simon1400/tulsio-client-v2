import { Container, Typography } from "@mui/material";
import Nav from "components/Nav";
import { FC, SyntheticEvent, useState } from "react"
import { CategoryTop } from "./styled";

interface IDictionaryHead {
  title: string;
  data: any;
}

const DictionaryHead: FC<IDictionaryHead> = ({ title, data }) => {

  const [value, setValue] = useState(0);

  const handleMenu = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    const element = document.getElementById(data[idx]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformData = data.map((item: any, idx: number) => ({
    title: item,
    slug: ""
  }))

  return (
    <Container>
      <CategoryTop>
        <Typography variant="h1">{title}</Typography>
        <Nav 
          data={transformData} 
          handle={handleMenu} 
          value={value} 
          subMenu 
        />
      </CategoryTop>
    </Container>
  )
}

export default DictionaryHead