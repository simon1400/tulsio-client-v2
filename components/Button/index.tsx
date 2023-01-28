import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { ButtonS } from "./styles"

export interface IButton extends ButtonProps {
  white?: boolean;
}

const Button: FC<IButton> = ({
  children,
  size,
  onClick,
  white = false
}) => {
  return (
    <ButtonS white={white} size={size} onClick={onClick}>
      <span>{children}</span>
    </ButtonS>
  )
}

export default Button