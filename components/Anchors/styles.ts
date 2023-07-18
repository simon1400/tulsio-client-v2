import styled from "@emotion/styled";

export const AnchorsS = styled.div(({theme}) => `
  margin-bottom: 60px;
  ul{
    li{
      padding-left: 0;
      &:before{
        display: none;
      }
      a{
       text-decoration: none;
       font-size: 20px;
       font-weight: 600;
       transition: all .2s ease;
       &:hover{
        color: ${theme.palette.primary.main};
       }
       svg{
        fill: ${theme.palette.primary.main};
        transform: rotate(-45deg);
        margin-top: 2px;
        margin-right: 10px;
       }
      }
    }
  }
`)