import styled from "@emotion/styled";
import { Breadcrumbs } from "@mui/material";

export const BreadcrumbsS = styled(Breadcrumbs)(({theme}) => `
  margin-bottom: 80px;
  z-index: 2;
  position: relative;
  a{
    color: rgba(255, 255, 255, .65);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.25;
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
      color: white;
    }
  }
`)