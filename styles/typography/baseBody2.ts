import { paragraph } from "./paragraph";

export const baseBody2 = (theme: any) => ({
  color: theme.palette.text.secondary,
  fontSize: "18px",
  lineHeight: 1.8,
  fontFamily: theme.typography.fontFamily,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
  p: paragraph(theme),
  [theme.breakpoints.down('xl')]: {
    fontSize: '17px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '15px',
  },
})