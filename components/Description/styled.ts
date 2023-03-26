import styled from "@emotion/styled";

export const DescriptionS = styled.div(({theme}) => `
  display: block;
  height: 100%;
  color: white;
  text-decoration: none;
  position: relative;
  &:hover{
    .img-wrap {
      transform: scale(.98);
    }
  }
  .img-wrap{
    background: #2b2b2b;
    height: 100%;
    width: 100%;
    border-radius: ${theme.borderRadius['base']};
    overflow: hidden;
    display: block;
    position: absolute;
    z-index: -1;
    transform: scale(1);
    transition: all .4s ease-in-out;
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
    }
  }
  .content-wrap-art{
    height: 100%;
    padding: ${theme.globalPadding['xl']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    ${theme.breakpoints.down('md')} {
      padding: ${theme.globalPadding['lg']};
    }
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.globalPadding['md']};
    }
    h2{
      margin-top: 0;
      margin-bottom: 20px;
      color: white;
    }
    p{
      color: #ffffffd9;
    }
  }
`)