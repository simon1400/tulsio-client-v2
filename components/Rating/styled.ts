import styled from "@emotion/styled";

export const RatingS = styled.div<{marginBottom?: number}>(({theme, marginBottom = 0}) => `
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: ${marginBottom}px;
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
`)