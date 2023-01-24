import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const WhiteButtonS = styled(Button)<ButtonProps>(({ theme }) => `
  color: #202020;
  background: white;
  text-transform: none;
  white-space: nowrap;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  min-width: 310px;
  font-weight: 600;
  outline: 2px solid transparent;
  transition: all .5s ease;
  &:hover{
    background: white;
    outline: 2px solid white;
  }
  ${theme.breakpoints.down('sm')} {
    min-width: 190px;
    font-size: 13px;
    height: 52px;
  }
`);