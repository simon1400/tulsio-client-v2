import { InputAdornment } from "@mui/material"
import { FC, ReactElement } from "react";
import { InputS } from "./styles"

export interface IInput {
  placeholder?: string;
  value: string;
  name: string;
  onChange: (e: any) => void
  onBlur: (type: any) => void
  endIcon?: ReactElement;
  handleEndIcon?: () => void
}

const Input: FC<IInput> = ({
  placeholder,
  value,
  name,
  onBlur = undefined,
  onChange,
  endIcon,
  handleEndIcon
}) => {

  return <InputS
    placeholder={placeholder} 
    value={value}
    name={name}
    inputProps={{
      onBlur: () => onBlur ? onBlur(name) : null
    }}
    onChange={(e: any) => onChange(e)} 
    endAdornment={
      endIcon ? <InputAdornment position="end" onClick={handleEndIcon}>
        {endIcon}
      </InputAdornment> : null
    }
  />
}

export default Input