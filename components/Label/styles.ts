import styled from "@emotion/styled"

export const LabelS = styled.label`
  text-transform: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .2);
  color: rgba(32, 32, 32, 0.7);
  font-size: 0.9375em;
  padding: 3px 15px;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 8px;
  &:not(:last-child) {
    margin-right: 8px;
  }
`