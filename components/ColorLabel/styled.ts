import styled from "@emotion/styled";

export const ColorLabelS = styled.label<{color: string}>(({theme, color}) => `
  display: inline-block;
  padding: 3px 20px;
  border-radius: 17px;
  height: 33px;
  background-color: inherit;
  color: ${color};
  font-size: 14px;
`)