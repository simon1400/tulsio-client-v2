import styled from "@emotion/styled";

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding-left: 30px;
  padding-right: 30px;
  .div1 { grid-area: 1 / 1 / 3 / 3; }
  .div2 { grid-area: 1 / 3 / 3 / 4; }
  .div3 { grid-area: 1 / 4 / 2 / 5; }
  .div4 { grid-area: 2 / 4 / 3 / 5; }
  .div5 { grid-area: 3 / 1 / 4 / 3; }
  .div6 { grid-area: 4 / 1 / 6 / 2; }
  .div7 { grid-area: 4 / 2 / 5 / 3; }
  .div8 { grid-area: 5 / 2 / 6 / 3; }
  .div9 { grid-area: 3 / 3 / 5 / 5; }
  .div10 { grid-area: 5 / 3 / 6 / 5; }
  .div11 { grid-area: 6 / 1 / 7 / 3; }
  .div12 { grid-area: 6 / 3 / 7 / 4; }
  .div13 { grid-area: 6 / 4 / 7 / 5; }
`