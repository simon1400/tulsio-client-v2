import { paragraph } from './paragraph'

export const baseBody = (theme: any) => ({
  color: theme.palette.text.secondary,
  fontSize: '20px',
  lineHeight: 1.8,
  fontFamily: theme.typography.fontFamily,
  '&::selection': {
    backgroundColor: theme.palette.primary.main,
  },
  p: paragraph(theme),
  [theme.breakpoints.down('xl')]: {
    fontSize: '19px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '17px',
  },
})
