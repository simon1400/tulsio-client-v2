import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export interface IStyleButton extends ButtonProps {
  white: string
}

export const ButtonS = styled(Button)<IStyleButton>(({ theme, white }) => `
  color: ${white === 'true' ? "#202020" : "#FFFFFF"}!important;
  background: ${white === 'true' ? "#FFFFFF" : theme.palette.primary.main};
  text-transform: none;
  white-space: nowrap;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  min-width: 190px;
  font-weight: 600;
  transition: all .2s ease;
  font-size: 19px;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  &:hover{
    background: ${white === 'true' ? "#FFFFFFCC" : theme.palette.primary.main+"CC"};
  }
  ${theme.breakpoints.down('xxl')} {
    min-width: 180px;
    height: 57px;
    font-size: 17px;
  }
  ${theme.breakpoints.down('lg')} {
    font-size: 16px;
  }
  ${theme.breakpoints.down('md')} {
    min-width: 170px;
    height: 53px;
    font-size: 14px;
  }
  ${theme.breakpoints.down('sm')} {
    font-size: 13px;
  }
`);