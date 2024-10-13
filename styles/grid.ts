import styled from '@emotion/styled'

export const GridTop = styled.div<{ shortInfo?: any | undefined }>(
  ({ theme, shortInfo }) => `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(30vh, auto);
  grid-column-gap: ${theme.globalGap.xxl};
  grid-row-gap: ${theme.globalGap.xxl};
  padding-left: ${theme.globalGap.xxl};
  padding-right: ${theme.globalGap.xxl};

  > div{
    &:nth-of-type(1) { grid-area: 1 / 1 / 3 / 3; }
    &:nth-of-type(2) { grid-area: ${shortInfo ? '1 / 3 / 2 / 5' : '1 / 3 / 3 / 4'}; }
    &:nth-of-type(3) { grid-area: ${shortInfo ? '2 / 3 / 3 / 4' : '1 / 4 / 2 / 5'}; }
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
    grid-column-gap: ${theme.globalGap.xl};
    grid-row-gap: ${theme.globalGap.xl};
    padding-left: ${theme.globalGap.xl};
    padding-right: ${theme.globalGap.xl};
  }
  ${theme.breakpoints.down('lg')} {
    grid-column-gap: ${theme.globalGap.lg};
    grid-row-gap: ${theme.globalGap.lg};
    padding-left: ${theme.globalGap.lg};
    padding-right: ${theme.globalGap.lg};
  }
  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);

    > div {
      &:nth-of-type(1) { grid-area: 1 / 1 / 3 / 3; }
      &:nth-of-type(2) { grid-area: ${shortInfo ? '3 / 1 / 4 / 3' : '3 / 1 / 5 / 2'}; }
      &:nth-of-type(3) { grid-area: ${shortInfo ? '4 / 1 / 5 / 2' : '3 / 2 / 4 / 3'}; }
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
    grid-column-gap: ${theme.globalGap.sm};
    grid-row-gap: ${theme.globalGap.sm};
    padding-left: ${theme.globalGap.sm};
    padding-right: ${theme.globalGap.sm};
  }
`,
)

export const GridShop = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${theme.globalGap.xxl};
  grid-row-gap: ${theme.globalGap.xxl};

  > div {
    &:nth-of-type(1) { grid-area: 1 / 1 / 2 / 2; }
    &:nth-of-type(2) { grid-area: 1 / 2 / 2 / 3; }
    &:nth-of-type(3) { grid-area: 1 / 3 / 2 / 4; }
    &:nth-of-type(4) { grid-area: 1 / 4 / 2 / 5; }
    &:nth-of-type(5) { grid-area: 1 / 5 / 2 / 6; }
    &:nth-of-type(6) { grid-area: 2 / 1 / 3 / 2; }
    &:nth-of-type(7) { grid-area: 2 / 2 / 3 / 3; }
    &:nth-of-type(8) { grid-area: 2 / 3 / 3 / 4; }
    &:nth-of-type(9) { grid-area: 2 / 4 / 3 / 6; }
    /* &:nth-of-type(10) { grid-area: 3 / 1 / 4 / 2; }
    &:nth-of-type(11) { grid-area: 3 / 2 / 4 / 3; }
    &:nth-of-type(12) { grid-area: 3 / 3 / 4 / 4; }
    &:nth-of-type(13) { grid-area: 3 / 4 / 4 / 5; }
    &:nth-of-type(14) { grid-area: 3 / 5 / 4 / 6; } */
  }

  ${theme.breakpoints.down('xl')} {
    grid-column-gap: ${theme.globalGap.xl};
    grid-row-gap: ${theme.globalGap.xl};
  } 
  ${theme.breakpoints.down('lg')} {
    grid-column-gap: ${theme.globalGap.lg};
    grid-row-gap: ${theme.globalGap.lg};
  } 
  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: ${theme.globalGap.md};
    grid-row-gap: ${theme.globalGap.md};
  } 
  ${theme.breakpoints.down('sm')} {
  grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${theme.globalGap.sm};
    grid-row-gap: ${theme.globalGap.sm};
    padding-left: ${theme.globalGap.sm};
    padding-right: ${theme.globalGap.sm};
  }
`,
)
