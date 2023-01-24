import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { NextPage } from "next";

const CustomNotFound: NextPage = () => {
  return <NotFound>
    <Typography variant="h1" color="primary" textAlign="center">404</Typography>
    <Typography variant="h1" component="h2" color="white" textAlign="center">Ups, někde se stala chyba!</Typography>
    <Typography color="white" textAlign="center">Omlouváme se, ale hledanou stránku nemůžeme zobrazit! Vraťte se na hlavní stranu a zkuste štěstí znovu.</Typography>
    <Button variant="contained">na hlavní stránku</Button>
  </NotFound>
}

export default CustomNotFound


const NotFound = styled.main(({theme}) => `
  text-align: center;
  h1{
    font-size: 369px;
    line-height: 1.15;
  }
  h2{
    margin-top: -20px;
    margin-bottom: 40px;
  }
  p{
    margin-bottom: 40px;
  }
`)