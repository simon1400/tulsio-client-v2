export const paragraph = (theme: any) => ({
  a: {
    position: "relative",
    color: "#fff",
    textDecoration: "none",
    transition: "all .2s ease",
    borderBottom: `1.5px solid ${theme.palette.primary.main}`,
    // "&:after": {
    //   content: `""`,
    //   display: "block",
    //   position: "absolute",
    //   width: "100%",
    //   height: "1px",
    //   bottom: 0,
    //   left: 0,
    //   backgroundColor: theme.palette.primary.main,
    // },
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  ul: {
    paddingLeft: 0,
    li: {
      listStyleType: "none",
      paddingLeft: "25px",
      position: "relative",
      p: {
        marginTop: 0,
        marginBottom: 0,
      },
      "&:before": {
        content: `''`,
        display: "block",
        position: "absolute",
        left: 0,
        top: "17px",
        width: "14px",
        height: "1.5px",
        backgroundColor: theme.palette.primary.main,
      }
    }
  },
})