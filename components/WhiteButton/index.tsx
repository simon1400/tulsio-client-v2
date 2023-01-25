import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { WhiteButtonS } from "./styles"

const WhiteButton: FC<ButtonProps> = ({
  children,
  size,
  onClick
}) => {
  return (
    <WhiteButtonS size={size} onClick={onClick}>{children}</WhiteButtonS>
  )
}

export default WhiteButton