export const button = (theme: any) => ({
  styleOverrides: {
    root: {
      fontSize: "19px",
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      fontWeight: 600,
      textTransform: 'none',
      height: "60px",
      minWidth: '190px',
      borderRadius: '30px',
      WebkitTapHighlightColor: "transparent",
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '12px!important',
      // },
    },
  }
})