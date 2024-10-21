import styled from '@emotion/styled'

export const FooterS = styled.footer(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${theme.globalGap.xxl};
  margin-right: ${theme.globalGap.xxl};
  border-top-left-radius: ${theme.borderRadius.base};
  border-top-right-radius: ${theme.borderRadius.base};
  background: ${theme.palette.secondary.main};
  padding: 60px 40px;
  >div{
    width: 100%;
  }
  >nav ul{
    white-space: nowrap;
  }
  ${theme.breakpoints.down('xl')} {
    margin-left: ${theme.globalGap.xl};
    margin-right: ${theme.globalGap.xl};
    border-top-left-radius: ${theme.borderRadius.xl};
    border-top-right-radius: ${theme.borderRadius.xl};
  }
  ${theme.breakpoints.down('lg')} {
    margin-left: ${theme.globalGap.lg};
    margin-right: ${theme.globalGap.lg};
    border-top-left-radius: ${theme.borderRadius.lg};
    border-top-right-radius: ${theme.borderRadius.lg};
  }
  ${theme.breakpoints.down('md')} {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 30px 15px;
    >div:first-of-type{
      margin-bottom: 25px;
      button {
        margin-bottom: 10px;
      }
    }
  }
  ${theme.breakpoints.down('sm')} {
    margin-left: ${theme.globalGap.sm};
    margin-right: ${theme.globalGap.sm};
    border-top-left-radius: ${theme.borderRadius.sm};
    border-top-right-radius: ${theme.borderRadius.sm};
    div{
      justify-content: center;
      > ul{
        li{
          display: block;
          margin-bottom: 15px;
          a{
            justify-content: center;
            font-size: 15px;
            font-weight: 700;
          }
        }
      }
    }
    .MuiTabs-root{
      button{
        max-width: 100%;
        font-size: 15px;
      }
    }
  }
`,
)
