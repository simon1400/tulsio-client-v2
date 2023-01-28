import styled from "@emotion/styled";

export const ModalContent = styled.div(({theme}) => `
  max-width: 590px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background: #202020;
  padding: 90px 60px;
  border-radius: ${theme.borderRadius['base']};
  .MuiIconButton-root{
    position: absolute;
    right: 30px;
    top: 30px;
  }
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
    padding: 40px 15px;
    .MuiIconButton-root{
      right: 0px;
      top: 0px;
      svg{
        font-size: 30px;
      }
    }
  }
`)

export const FormWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  button{
    margin-top: 15px;
  }
`