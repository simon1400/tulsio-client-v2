import { paragraph } from "./paragraph";

export const baseBody = (theme: any) => ({
  color: "rgba(255, 255, 255, .85)",
  fontSize: "19px",
  lineHeight: "1.84",
  fontFamily: theme.typography.fontFamily,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
  p: paragraph(theme),
  [theme.breakpoints.down('xxl')]: {
    fontSize: '17px',
    lineHeight: "1.82",
    // ul: {
    //   li: {
    //     "&:before": {
    //       top: "13px"
    //     }
    //   }
    // }
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    lineHeight: 1.81,
    // ul: {
    //   li: {
    //     "&:before": {
    //       top: "13px"
    //     }
    //   }
    // }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: 1.79,
    // ul: {
    //   li: {
    //     "&:before": {
    //       top: "13px"
    //     }
    //   }
    // }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    lineHeight: 1.77,
    // ul: {
    //   li: {
    //     "&:before": {
    //       top: "13px"
    //     }
    //   }
    // }
  }
})