import styled from "@emotion/styled";

export const DateS = styled.div(({theme, color}) => `
  margin-top: 80px;
  z-index: 2;
  position: relative;
  span{
    color: ${color};
    font-size: 19px;
    font-weight: 600;
    line-height: 1.32;
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
      color: ${color};
    }
  }
  ${theme.breakpoints.down('xxl')} {
    span{
      font-size: 17px;
      line-height: 1.47;
    }
  }
  ${theme.breakpoints.down('lg')} {
    span{
      font-size: 16px;
      line-height: 1.56;
    }
  }
  ${theme.breakpoints.down('md')} {
    span{
      font-size: 14px;
      line-height: 1.79;
    }
  }
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 20px;
    margin-top: 40px;
    span{
      font-size: 13px;
      line-height: 1.92;
    }
  }
`)