import { baseBody } from "./baseBody";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody(theme)
  },
  h1: {
    fontSize: "40px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '30px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '27px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '25px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '23px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '22px',
      lineHeight: 1.25
    },
  },
  h2: {
    fontSize: "30px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '23px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '21px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '20px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
      lineHeight: 1.25
    },
  },
  h3: {
    fontSize: "24px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '19px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '18px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
      lineHeight: 1.25
    },
  },
  h4: {
    fontSize: "19px",
    ...baseHead(theme),
    [theme.breakpoints.down('xxl')]: {
      fontSize: '17px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: 1.25
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
      lineHeight: 1.25
    },
  },
})