import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const NewsletterS = styled.div(({theme}) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.palette.primary.main};
  border-radius: ${theme.borderRadius['base']};
  padding: 65px 40px;
  margin-top: ${theme.globalGap['xxl']};
  margin-bottom: ${theme.globalGap['xxl']};
  margin-left: ${theme.globalGap['xxl']};
  margin-right: ${theme.globalGap['xxl']};
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius['xxl']};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius['xl']};
    margin-top: ${theme.globalGap['xl']};
    margin-bottom: ${theme.globalGap['xl']};
    margin-left: ${theme.globalGap['xl']};
    margin-right: ${theme.globalGap['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius['lg']};
    margin-top: ${theme.globalGap['lg']};
    margin-bottom: ${theme.globalGap['lg']};
    margin-left: ${theme.globalGap['lg']};
    margin-right: ${theme.globalGap['lg']};
  }
  ${theme.breakpoints.down('md')} {
    margin-left: ${theme.globalGap['md']};
    margin-right: ${theme.globalGap['md']};
    margin-top: ${theme.globalGap['md']};
    margin-bottom: ${theme.globalGap['md']};
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
    margin-top: ${theme.globalGap['sm']};
    margin-bottom: ${theme.globalGap['sm']};
    margin-left: ${theme.globalGap['sm']};
    margin-right: ${theme.globalGap['sm']};
  }
  p{
    font-size: 50px;
    line-height: 1.2;
  }
`)


export const WhiteButton = styled(Button)<ButtonProps>(({ theme }) => `
  color: #202020;
  background: white;
  text-transform: none;
  white-space: nowrap;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  min-width: 310px;
  &:hover{
    background: white;
  }
`);