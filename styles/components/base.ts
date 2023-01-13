export const base = (theme: any) => ({
  styleOverrides: {
    html: {
      overflowX: "hidden",
    },
    body: {
      overflowX: "hidden",
      position: 'relative',
      minHeight: "100vh",
      fontSize: "16px",
      width: '100%',
      background: "#202020",
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    }
  }
})