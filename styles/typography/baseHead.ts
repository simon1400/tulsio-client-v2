export const baseHead = (theme: any) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  color: '#fff',
  lineHeight: '1.25',
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
  // [theme.breakpoints.down('xxl')]: {
  //   // fontSize: '3vw'
  // },
  // [theme.breakpoints.down('xl')]: {
  //   // fontSize: '4vw'
  // },
  // [theme.breakpoints.down('lg')]: {
  //   // fontSize: '4.5vw'
  // },
  // [theme.breakpoints.down('md')]: {
  //   // fontSize: '5vw'
  // },
  // [theme.breakpoints.down('sm')]: {
  //   // fontSize: '7vw'
  // },
})