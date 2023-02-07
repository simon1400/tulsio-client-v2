import styled from "@emotion/styled";

export const CategoryTop = styled.section(({theme}) => `
  h1{
    margin-top: 0;
    margin-bottom: 80px;
    ${[theme.breakpoints.down("xxl")]} {
      margin-bottom: 50px;
    }
    ${[theme.breakpoints.down("xl")]} {
      margin-bottom: 40px;
    }
    ${[theme.breakpoints.down("lg")]} {
      margin-bottom: 30px;
    }
    span{
      color: rgba(255, 255, 255, .25);
      margin-right: 10px;
    }
  }
`)