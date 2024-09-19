import styled from "@emotion/styled";

export const SellerLogoS = styled.div(({theme}) => `
  border-radius: 50%;
  border: 3px solid ${theme.palette.primary.main};
  width: 80px;
  height: 80px;
  display: flex;
  position: relative;
  background: white;
  overflow: hidden;
  img{
    height: 100%;
    padding: 10px;
  }
`)