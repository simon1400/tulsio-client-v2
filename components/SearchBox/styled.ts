import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";

export const SearchWrap = styled.div`
  margin-bottom: 80px;
`

export const Search = styled(OutlinedInput)(({theme}) => `
  border-radius: 60px;
  padding-left: 35px;
  padding-right: 35px;
  height: 65px;
  width: 100%;
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(69, 69, 255, .8);
  }
  .MuiOutlinedInput-notchedOutline {
    transition: all .2s ease;
    border-color: rgba(69, 69, 255, .5);
  }
  .MuiInputAdornment-root {
    svg{
      color: rgba(255, 255, 255, 0.85);
    }
  }
  &.Mui-focused {
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