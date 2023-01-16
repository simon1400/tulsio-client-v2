import styled from "@emotion/styled";
import { globalGap } from "styles/grid";

export const AlphabetWrap = styled.div`
  margin-bottom: 30px;
  h2{
    margin-bottom: 30px;
  }
  img{
    margin-bottom: 20px;
  }
`

export const Box = styled.div(({theme}) => `
  border-radius: ${theme.borderRadius['base']};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(255,255,255, .07);
  padding: 40px;
  color: #eee;
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius['xxl']};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius['lg']};
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
    padding: 15px;
  }
`)