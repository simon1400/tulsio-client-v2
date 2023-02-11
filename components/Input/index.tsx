import { OutlinedInputProps } from "@mui/material";
import { FC } from "react";
import { InputS } from "./styles";

export interface IInput extends OutlinedInputProps {
  onChange: (e: any) => void;
  onBlur?: (type: any) => void;
}

const Input: FC<IInput> = ({
  placeholder,
  value,
  type = "text",
  startAdornment,
  endAdornment,
  name,
  onBlur = undefined,
  onChange,
}) => {
  return (
    <InputS
      placeholder={placeholder}
      value={value}
      style={{
        paddingLeft: startAdornment ? "35px" : "10px",
      }}
      name={name}
      type={type}
      inputProps={{
        onBlur: () => (onBlur ? onBlur(name) : null),
      }}
      onChange={(e: any) => onChange(e)}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
    />
  );
};

export default Input;
