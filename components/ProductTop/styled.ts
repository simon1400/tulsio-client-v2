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
  .rating-wrap{
    display: flex;
    align-items: center;
    line-height: 1;
    margin-bottom: 30px;
    > div{
      font-size: 24px;
      font-weight: 700;
      margin-right: 15px;
    }
    .MuiRating-iconFilled{
      color: ${theme.palette.primary.main};
    }
    .MuiRating-iconEmpty{
      color: rgba(0, 0, 0, 0.2);
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
  }
`)