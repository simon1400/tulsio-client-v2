import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";

export const SearchWrap = styled.div`
  margin-bottom: 80px;
`

export const Search = styled(OutlinedInput)(({theme}) => `
  border-radius: 60px;
  height: 65px;
  width: 100%;
  &:hover{
    fieldset {
      border-color: ${theme.palette.primary.main};
    }
  }
  fieldset {
    border-color: ${theme.palette.primary.main};
  }
  input{
    color: white;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 600;
    &::placeholder{
      color: rgba(255, 255, 255, 0.85);
      opacity: 1;
    }
  }
`)