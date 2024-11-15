import styled from '@emotion/styled'

export const RatingS = styled.div<{ marginBottom?: number; marginTop?: number; big?: boolean }>(
  ({ theme, marginBottom = 0, marginTop = 0, big = true }) => `
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: ${marginBottom}px;
  > div{
    font-size: 24px;
    font-weight: 700;
    margin-right: 15px;
    ${theme.breakpoints.down('sm')} { 
      font-size: 16px;
    }
  }
  .MuiRating-iconFilled{
    font-size: ${big ? '24px' : '12px'};
    color: ${theme.palette.primary.main};
    ${theme.breakpoints.down('sm')} { 
      font-size: 16px;
    }
  }
  .MuiRating-iconEmpty{
    font-size: ${big ? '24px' : '12px'};
    color: rgba(0, 0, 0, 0.2);
    ${theme.breakpoints.down('sm')} { 
      font-size: 16px;
    }
  }
`,
)
