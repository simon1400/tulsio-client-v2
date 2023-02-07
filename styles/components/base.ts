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
      // backgroundImage: "linear-gradient(119deg, #4545ff 90%, #ff4564 20%)",
      // "&:after": {
      //   content: "''",
      //   display: 'block',
      //   backgroundImage: "linear-gradient(119deg, #ff4564 20%, #4545ff 90%)",
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