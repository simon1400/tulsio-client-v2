import styled from "@emotion/styled";

export const InfoBlockS = styled.div(({theme}) => `
  border-radius: ${theme.borderRadius['base']};
  height: 100%;
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

  padding: 40px;
  background-color: rgba(255,255,255, .07);

  h3{
    margin-bottom: 20px;
    img{
      display: block;
      margin-bottom: 20px;
    }
    svg{
      margin-right: 10px;
    }
  }
`)