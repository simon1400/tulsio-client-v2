import styled from '@emotion/styled'

export const ProductTopS = styled.div(
  ({ theme }) => `
  border-radius: ${theme.borderRadius.base};
  background: white;
  display: flex;
  flex-dirtection: column;
  height: 100%;
  padding: 40px 50px;
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
  .labels-wrap{
    margin-bottom: 15px;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    ${[theme.breakpoints.down('sm')]} {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`,
)
