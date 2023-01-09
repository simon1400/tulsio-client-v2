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
  // [theme.breakpoints.down('lg')]: {
  //   fontSize: '24px',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   fontSize: '19px!important',
  //   lineHeight: "1.63",
  //   ul: {
  //     li: {
  //       "&:before": {
  //         top: "13px"
  //       }
  //     }
  //   }
  // },
})