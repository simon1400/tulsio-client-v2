import styled from "@emotion/styled"

export const LabelS = styled.label`
  /* padding: 5px 13px; */
  /* color: rgba(black, .9); */
  /* font-size: 12px; */
  /* margin-right: 10px; */
  /* font-weight: 600; */
  text-transform: none;
  /* border-radius: 26px; */
  /* margin-bottom: 20px; */
  display: inline-block;
  /* backdrop-filter: blur(5px); */
  /* -webkit-backdrop-filter: blur(5px); */
  /* white-space: nowrap; */
  cursor: pointer;

  border-radius: 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .2);
  color: rgba(32, 32, 32, 0.7);
  font-size: 15px;
  padding: 3px 15px;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 8px;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &.green{
    background-color: #D9FFDE;
  }
  &.blue{
    background-color: #D9E9FF;
  }
  &.pink{
    background-color: #FDD9FF;
  }
`