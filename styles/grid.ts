import styled from "@emotion/styled";

export const globalGap = {
  xxl: '25px',
  xl: '20px',
  lg: '15px',
  sm: '10px'
}

export const GridTop = styled.div(({theme}) => `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(20, minmax(30vh, auto));
  grid-column-gap: ${globalGap['xxl']};
  grid-row-gap: ${globalGap['xxl']};
  padding-left: ${globalGap['xxl']};
  padding-right: ${globalGap['xxl']};

  > div{
    &:nth-of-type(1) { grid-area: 1 / 1 / 3 / 3; }
    &:nth-of-type(2) { grid-area: 1 / 3 / 3 / 4; }
    &:nth-of-type(3) { grid-area: 1 / 4 / 2 / 5; }
    &:nth-of-type(4) { grid-area: 2 / 4 / 3 / 5; }
    &:nth-of-type(5) { grid-area: 3 / 1 / 4 / 2; }
    &:nth-of-type(6) { grid-area: 4 / 1 / 5 / 2; }
    &:nth-of-type(7) { grid-area: 3 / 2 / 5 / 3; }
    &:nth-of-type(8) { grid-area: 3 / 3 / 5 / 5; }
    &:nth-of-type(9) { grid-area: 5 / 1 / 6 / 3; }
    &:nth-of-type(10) { grid-area: 5 / 3 / 6 / 4; }
    &:nth-of-type(11) { grid-area: 5 / 4 / 6 / 5; }
  }

  ${theme.breakpoints.down('xl')} {
    grid-column-gap: ${globalGap['xl']};
    grid-row-gap: ${globalGap['xl']};
    padding-left: ${globalGap['xl']};
    padding-right: ${globalGap['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    grid-column-gap: ${globalGap['lg']};
    grid-row-gap: ${globalGap['lg']};
    padding-left: ${globalGap['lg']};
    padding-right: ${globalGap['lg']};
  }
  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);

    > div {
      &:nth-of-type(1) { grid-area: 1 / 1 / 3 / 3; }
      &:nth-of-type(2) { grid-area: 3 / 1 / 5 / 2; }
      &:nth-of-type(3) { grid-area: 3 / 2 / 4 / 3; }
      &:nth-of-type(4) { grid-area: 4 / 2 / 5 / 3; }
      &:nth-of-type(5) { grid-area: 5 / 1 / 6 / 2; }
      &:nth-of-type(6) { grid-area: 6 / 1 / 7 / 2; }
      &:nth-of-type(7) { grid-area: 5 / 2 / 7 / 3; }
      &:nth-of-type(8) { grid-area: 7 / 1 / 9 / 3; }
      &:nth-of-type(9) { grid-area: 9 / 1 / 10 / 3; }
      &:nth-of-type(10) { grid-area: 10 / 1 / 11 / 2; }
      &:nth-of-type(11) { grid-area: 10 / 2 / 11 / 3; }
    }
  }
  ${theme.breakpoints.down('sm')} {
    grid-column-gap: ${globalGap['sm']};
    grid-row-gap: ${globalGap['sm']};
    padding-left: ${globalGap['sm']};
    padding-right: ${globalGap['sm']};
  }
`)