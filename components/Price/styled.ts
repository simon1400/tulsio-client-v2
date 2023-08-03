import styled from "@emotion/styled";

export const PriceS = styled.div(({theme}) => `
  display: flex;
  align-items: center;
  b{
    font-size: 40px;
    margin-right: 20px;
    line-height: 1;
  }
  span{
    display: block;
    color: #707070;
    font-size: 15px;
    line-height: 1;
  }
  label{
    color: #21af21;
    font-size: 15px;
    line-height: 1;
  }
`)