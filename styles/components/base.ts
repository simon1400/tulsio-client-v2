export const base = (theme: any) => ({
  styleOverrides: {
    html: {
      overflowX: 'hidden',
      WebkitTapHighlightColor: 'transparent',
    },
    body: {
      overflowX: 'hidden',
      position: 'relative',
      minHeight: '100vh',
      fontSize: '16px',
      width: '100%',
      backgroundColor: theme.palette.background.default,
      '&:after': {
        content: "''",
        display: 'block',
        backgroundImage: theme.palette.background.paper,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -10,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
  },
})
