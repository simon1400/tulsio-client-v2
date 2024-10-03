import styled from "@emotion/styled";

export const ProductTopS = styled.div(({theme}) => `
  border-radius: ${theme.borderRadius['base']};
  background: white;
  height: 100%;
  padding: 40px 50px;
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
  .labels-wrap{
    margin-top: 15px;
    margin-bottom: 30px;
    > label{
      &:not(:first-of-type) {
        margin-left: 5px;
      }
      &:not(:last-of-type) {
        margin-right: 5px;
      }
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
  }
`)