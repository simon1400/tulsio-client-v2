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
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: auto;
  }
`)