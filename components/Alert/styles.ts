import styled from "@emotion/styled";
import { Alert, AlertProps } from "@mui/material";

export const AlertS = styled(Alert)(({theme, severity}) => `
  margin-top: 30px;
  background: ${severity === 'error' ? "rgb(22, 11, 11)" : "rgb(12, 19, 13)"};
  border-radius: ${theme.borderRadius['lg']};
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
  }
  .MuiAlertTitle-root{
    color: ${severity === 'error' ? "rgb(244, 199, 199)" : "rgb(204, 232, 205)"};
    font-weight: 600;
  }
  p{
    color: ${severity === 'error' ? "rgb(244, 199, 199)" : "rgb(204, 232, 205)"};
  }
`)