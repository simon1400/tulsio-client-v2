import styled from '@emotion/styled'

export const LabelS = styled.a<{ color: string }>(
  ({ theme, color }) => `
  text-transform: none;
  display: inline-block;
  cursor: pointer;
  border-radius: 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, .2);
  color: ${`${color}d9`};
  font-size: 15px;
  padding: 3px 15px;
  font-weight: 600;
  white-space: nowrap;
  margin-bottom: 8px;
  text-decoration: none;
  transition: all .2s ease;
  &:hover{
    background-color: rgba(255, 255, 255, 0.3)
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
  ${theme.breakpoints.down('xxl')} {
    font-size: 14px;
  }
  ${theme.breakpoints.down('lg')} {
    font-size: 13px;
  }
  ${theme.breakpoints.down('md')} {
    font-size: 12px;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`,
)
