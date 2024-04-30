import styled from "@emotion/styled";

export const ShortContentS = styled.div(({theme}) => `
  text-align: center;
  padding-top: 85px;
  p{
    padding-bottom: 85px;
  }
  > h1, > h2 {
    margin-bottom: 30px;
  }
  ${theme.breakpoints.down('sm')} {
    > h1, > h2 {
      font-size: 22px;
    }
  }
`)