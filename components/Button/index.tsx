import type { ButtonProps } from '@mui/material'
import type { FC } from 'react'

import { ButtonS } from './styles'

export interface IButton extends ButtonProps {
  white?: boolean
}

const Button: FC<IButton> = ({ children, size, onClick, href, white = false }) => {
  return (
    <ButtonS href={href} white={!white ? 'false' : 'true'} size={size} onClick={onClick}>
      <span>{children}</span>
    </ButtonS>
  )
}

export default Button
