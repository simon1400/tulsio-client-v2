import { baseBody } from "./baseBody";
import { baseBody2 } from "./baseBody2";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody2(theme)
  },
  h1: {
    fontSize: "32px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '28px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '27px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '23px'
    },
  },
  h2: {
    fontSize: "28px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '25px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '24px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
    },
  },
  h3: {
    fontSize: "24px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '22px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '19px'
    },
  },
  h4: {
    fontSize: "20px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '19px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '17px'
    },
  },
})