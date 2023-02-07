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
      "&:after": {
        content: "''",
        display: 'block',
        backgroundImage: "radial-gradient(circle at 59% 100%, #000, rgba(0, 0, 0, 0.65) 95%), linear-gradient(119deg, #4545ff 20%, #ff4564 90%)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    }
  }
})