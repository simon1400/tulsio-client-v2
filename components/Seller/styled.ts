import styled from '@emotion/styled'

export const SellerS = styled.div(
  ({ theme }) => `
  background-color: rgba(43, 43, 43, 0.07);
  padding: 40px 45px;

  border-radius: ${theme.borderRadius.base};
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius.xxl};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius.xl};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius.lg};
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius.sm};
  }
  .button {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-top: 24px;
  }
  .seller-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
      align-items: flex-start;
    }

  }
  .logo-wrap{
    display: flex;
    align-items: center;
    ${theme.breakpoints.down('sm')} {
      margin-bottom: 20px;
    }
    > div{
      margin-right: 20px;

      >svg {
      width: 20px;}
    }
  }
`,
)
