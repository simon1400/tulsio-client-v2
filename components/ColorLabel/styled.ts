import styled from '@emotion/styled'

export const ColorLabelS = styled.label<{ color: string }>(
  ({ theme, color }) => `
  display: inline-block;
  padding: 3px 20px;
  border-radius: 17px;
  height: 33px;
  background-color: inherit;
  color: ${color};
  font-size: 15px;
  ${theme.breakpoints.down('sm')} { 
    font-size: 10px;
    height: 21px;
    padding: 1px 10px;
  }
`,
)
