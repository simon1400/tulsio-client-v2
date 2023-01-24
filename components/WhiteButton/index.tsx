import { ButtonProps } from "@mui/material";
import { FC } from "react";
import { WhiteButtonS } from "./styles"

const WhiteButton: FC<ButtonProps> = ({
  children,
  size
}) => {
  return (
    <WhiteButtonS size={size}>{children}</WhiteButtonS>
  )
}

export default WhiteButton