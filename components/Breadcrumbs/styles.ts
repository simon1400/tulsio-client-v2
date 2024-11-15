import styled from '@emotion/styled'
import { Breadcrumbs } from '@mui/material'

export const BreadcrumbsS = styled(Breadcrumbs)(
  ({ theme, color }) => `
  margin-bottom: 80px;
  height: 19px!important;
  z-index: 2;
  a{
    color: ${color};
    line-height: 19px;
    font-weight: 600;
    text-decoration: none;
    transition: all .2s ease;
    &:hover{
      opacity: 0.8;
    }
  }
  svg {
    vertical-align: middle;
    font-size: inherit;
    line-height: inherit;
    margin-top: 2px;
  }
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 40px;
    a{
      font-size: 13px;
      line-height: 1.92;
    }
    svg {
      font-size: 12px;
      margin-top: 4px;
    }
  }
  `,
)
