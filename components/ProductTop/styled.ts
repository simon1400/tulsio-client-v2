import styled from '@emotion/styled'
export const ProductTopS = styled.div(
  ({ theme }) => `
  position: relative;
  border-radius: ${theme.borderRadius.base};
  background: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 50px;
  ${theme.breakpoints.down('md')} {
    height: calc(100% + 50px);
    padding: 30px 40px;
  }
  ${theme.breakpoints.down('sm')} {
    height: calc(100% + 90px);
    padding: 20px 30px;
  }

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

  .labels-wrap {
    margin-bottom: 15px;
  }

  .bottom {
    position: absolute;
    bottom: 40px;
    left: 0; 
    right: 0; 
    display: flex;
    justify-content: space-between;
    width: 100%; 
    padding: 0 40px;
    ${theme.breakpoints.down('md')} {
      bottom: 30px;
    }
    ${theme.breakpoints.down('sm')} {
      bottom: 20px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  `,
)
