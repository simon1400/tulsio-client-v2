import styled from '@emotion/styled'

export const PriceS = styled.div<{ availability?: boolean }>(
  ({ theme, availability }) => `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  b{
    font-size: 40px;
    margin-right: 20px;
    line-height: 1;
    ${theme.breakpoints.down('md')} {
      font-size: 20px;
    }
  }
  span{
    display: block;
    color: #707070;
    font-size: 15px;
    line-height: 1;
  }
  label{
    color: ${availability ? '#21af21' : '#ff0000'};
    font-size: 15px;
    line-height: 1;
  }
`,
)
