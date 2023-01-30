export const base = (theme: any) => ({
  styleOverrides: {
    html: {
      overflowX: "hidden",
      WebkitTapHighlightColor: 'transparent'
    },
    body: {
      overflowX: "hidden",
      position: 'relative',
      minHeight: "100vh",
      fontSize: "16px",
      width: '100%',
      backgroundColor: "#202020",
      // "&:after": {
      //   content: "''",
      //   display: 'block',
      //   backgroundImage: "linear-gradient(122deg, #4545ff, rgba(69, 69, 255, 0)), linear-gradient(to bottom, #a50d5a, rgba(165, 13, 90, 0))",
      //   width: "100%",
      //   height: "1200px",
      //   position: "absolute",
      //   top: 0,
      //   left: 0,
      //   zIndex: -10
      // },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    }
  }
})