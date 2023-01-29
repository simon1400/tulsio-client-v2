import { InputAdornment, OutlinedInputProps } from "@mui/material"
import { FC, ReactElement } from "react";
import { InputS } from "./styles"

export interface IInput extends OutlinedInputProps {
  onChange: (e: any) => void
  onBlur?: (type: any) => void
}

const Input: FC<IInput> = ({
  placeholder,
  value,
  startAdornment,
  endAdornment,
  name,
  onBlur = undefined,
  onChange
}) => {

  return <InputS
    placeholder={placeholder} 
    value={value}
    name={name}
    inputProps={{
      onBlur: () => onBlur ? onBlur(name) : null
    }}
    onChange={(e: any) => onChange(e)} 
    startAdornment={startAdornment}
    // endAdornment={
    //   endIcon ? <InputAdornment position="end" onClick={handleEndIcon}>
    //     {endIcon}
    //   </InputAdornment> : null
    // }
    endAdornment={endAdornment}
  />
}

export default Input