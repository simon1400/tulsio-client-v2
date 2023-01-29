import styled from "@emotion/styled";
import { Breadcrumbs } from "@mui/material";

export const BreadcrumbsS = styled(Breadcrumbs)(({theme, color}) => `
  margin-bottom: 80px;
  z-index: 2;
  position: relative;
  a{
    color: ${color};
    font-size: 19px;
    font-weight: 600;
    line-height: 1.32;
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
      color: ${color};
    }
  }
  ${theme.breakpoints.down('xxl')} {
    a{
      font-size: 17px;
      line-height: 1.47;
    }
    svg{
      font-size: 20px;
    }
  }
  ${theme.breakpoints.down('lg')} {
    a{
      font-size: 16px;
      line-height: 1.56;
    }
    svg{
      font-size: 15px;
    }
  }
  ${theme.breakpoints.down('md')} {
    a{
      font-size: 14px;
      line-height: 1.79;
    }
    svg{
      font-size: 15px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    a{
      font-size: 13px;
      line-height: 1.92;
    }
  }
`)