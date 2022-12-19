import styled from "@emotion/styled"

export const Label = styled.label`
  padding: 5px 13px;
  color: rgba(black, .9);
  font-size: 12px;
  margin-right: 10px;
  font-weight: 600;
  text-transform: none;
  border-radius: 26px;
  margin-bottom: 20px;
  display: inline-block;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  white-space: nowrap;
  cursor: pointer;
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