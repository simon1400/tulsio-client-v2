import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";

export const InputS = styled(OutlinedInput)(({theme}) => `
  border-radius: 60px;
  padding-left: 35px;
  padding-right: 35px;
  height: 65px;
  width: 100%;
  ${theme.breakpoints.down('xxl')} {
    height: 57px;
    input{
      font-size: 17px;
    }
  }
  ${theme.breakpoints.down('lg')} {
    input{
      font-size: 16px;
    }
  }
  ${theme.breakpoints.down('md')} {
    height: 53px;
    padding-left: 15px!important;
    padding-right: 15px!important;
    input{
      font-size: 14px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    input{
      font-size: 13px;
    }
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(69, 69, 255, .8);
  }
  .MuiOutlinedInput-notchedOutline {
    transition: all .2s ease;
    border-color: rgba(69, 69, 255, .5);
    border-width: 1.5px;
  }
  .MuiInputAdornment-root {
    svg{
      color: rgba(255, 255, 255, 0.85);
    }
  }
  &.Mui-focused {
    border-width: 1.5px;
    input{
      &::placeholder{
        color: white;
      }
    }
  }
  input{
    color: white;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 600;
    &::placeholder{
      color: rgba(255, 255, 255, 0.45);
      opacity: 1;
    }
  }
`)