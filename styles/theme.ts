import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';
import {createTheme} from '@mui/material'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 960,
      lg: 1200,
      xl: 1440,
      xxl: 1920
    },
  },
  palette: {
    primary: {
      main: "#e4002b"
    },
    text: {
      primary: "#000"
    }
  },
  typography: {
    fontFamily: "Manrope",
  },
  spacing: 5
})

const themeOption: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowX: "hidden",
        },
        body: {
          overflowX: "hidden",
          position: 'relative',
          minHeight: "100vh",
          width: '100%',
          background: "#202020"
        }
      }
    },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       disableRipple: true,
    //       fontSize: "16px",
    //       letterSpacing: "2.56px",
    //       lineHeight: "1",
    //       fontWeight: 600,
    //       WebkitTapHighlightColor: "transparent",
    //       [theme.breakpoints.down('sm')]: {
    //         fontSize: '12px!important',
    //       },
    //     },
    //     text: {
    //       position: "relative",
    //       padding: "10px 0",
    //       "&:after": {
    //         content: '""',
    //         display: "block",
    //         width: "100%",
    //         height: "1.5px",
    //         position: "absolute",
    //         bottom: "0",
    //         left: "0",
    //         transform: "scale(1)",
    //         backgroundColor: theme.palette.primary.main,
    //         transition: "all .2s ease"
    //       },
    //       "&:hover": {
    //         backgroundColor: "transparent",
    //         "&:after": {
    //           transform: "scale(1.1)",
    //         }
    //       },
    //     },
    //     startIcon: {
    //       marginRight: "11px",
    //       transition: 'all .2s ease',
    //       transform: "scale(1)",
    //       width: "40px",
    //       height: "40px",
    //       borderRadius: "50%",
    //       border: "solid 1.5px rgba(228, 0, 43, 0.3)",
    //       display: "flex",
    //       "*:nth-of-type(1)": {
    //         fontSize: '18px',
    //         margin: "auto",
    //         transition: 'all .5s ease',
    //       },
    //       "&:hover": {
    //         transform: "scale(1.1)",
    //       }
    //     }
    //   },
    //   variants: [
    //     {
    //       props: { variant: 'contained' },
    //       style: {
    //         borderRadius: "0",
    //         minWidth: "300px",
    //         minHeight: "70px",
    //         boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    //         transition: 'transform .3s ease',
    //         transform: "scale(1)",
    //         paddingLeft: "50px",
    //         paddingRight: "50px",
    //         [theme.breakpoints.down('sm')]: {
    //           minWidth: "209px",
    //           minHeight: "49px",
    //           paddingLeft: "20px",
    //           paddingRight: "20px",
    //         },
    //         "span": {
    //           transition: 'transform .3s ease',
    //         },
    //         "&:hover": {
    //           transform: "scale(1.05)",
    //           backgroundColor: theme.palette.primary.main,
    //           "span:first-of-type": {
    //             transform: "scale(0.95)"
    //           }
    //         }
    //       },
    //     },
    //     {
    //       props: { variant: 'withIcon' },
    //       style: {
    //         color: theme.palette.primary.main,
    //         whiteSpace: "nowrap",
    //         "&:hover": {
    //           backgroundColor: "transparent",
    //           span: {
    //             transform: "scale(1.1)",
    //             marginRight: "15px",
    //             border: "solid 1.5px rgba(228, 0, 43, 1)",
    //             svg: {
    //               transform: "scale(0.9)"
    //             }
    //           }
    //         }
    //       },
    //     },
    //   ],
    // }
  },
  typography: {
  //   body1: {
  //     color: 'black',
  //     fontSize: "28px",
  //     lineHeight: "1.5",
  //     fontFamily: theme.typography.fontFamily,
  //     [theme.breakpoints.down('lg')]: {
  //       fontSize: '24px',
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       fontSize: '19px!important',
  //       lineHeight: "1.63",
  //       ul: {
  //         li: {
  //           "&:before": {
  //             top: "13px"
  //           }
  //         }
  //       }
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //     p: {
  //       a: {
  //         position: "relative",
  //         color: "inherit",
  //         textDecoration: "none",
  //         transition: "all .2s ease",
  //         "&:after": {
  //           content: `""`,
  //           display: "block",
  //           position: "absolute",
  //           width: "100%",
  //           height: "1px",
  //           bottom: 0,
  //           left: 0,
  //           backgroundColor: theme.palette.primary.main,
  //           transition: "all .2s ease",
  //         },
  //         "&:hover": {
  //           color: theme.palette.primary.main,
  //           "&:after": {
  //             bottom: "3px"
  //           }
  //         }
  //       },
  //       ul: {
  //         paddingLeft: 0,
  //         li: {
  //           listStyleType: "none",
  //           paddingLeft: "30px",
  //           position: "relative",
  //           p: {
  //             marginTop: 0,
  //             marginBottom: 0,
  //           },
  //           "&:before": {
  //             content: `''`,
  //             display: "block",
  //             position: "absolute",
  //             left: 0,
  //             top: "28px",
  //             width: "15px",
  //             height: "2px",
  //             backgroundColor: theme.palette.primary.main,
              
  //           }
  //         }
  //       },
  //     },
  //   },
  //   body2: {
  //     color: 'black',
  //     fontSize: "23px",
  //     lineHeight: "1.83",
  //     fontFamily: theme.typography.fontFamily,
  //     [theme.breakpoints.down('lg')]: {
  //       fontSize: '20px',
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       fontSize: '16px',
  //       lineHeight: "1.81",
  //       ul: {
  //         li: {
  //           "&:before": {
  //             top: "13px"
  //           }
  //         }
  //       }
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //     p: {
  //       a: {
  //         position: "relative",
  //         color: "inherit",
  //         textDecoration: "none",
  //         transition: "all .2s ease",
  //         "&:after": {
  //           content: `""`,
  //           display: "block",
  //           position: "absolute",
  //           width: "100%",
  //           height: "1px",
  //           bottom: 0,
  //           left: 0,
  //           backgroundColor: theme.palette.primary.main,
  //           transition: "all .2s ease",
  //         },
  //         "&:hover": {
  //           color: theme.palette.primary.main,
  //           "&:after": {
  //             bottom: "3px"
  //           }
  //         }
  //       },
  //       ul: {
  //         paddingLeft: 0,
  //         li: {
  //           listStyleType: "none",
  //           paddingLeft: "30px",
  //           position: "relative",
  //           p: {
  //             marginTop: 0,
  //             marginBottom: 0,
  //           },
  //           "&:before": {
  //             content: `''`,
  //             display: "block",
  //             position: "absolute",
  //             left: 0,
  //             top: "23px",
  //             width: "15px",
  //             height: "2px",
  //             backgroundColor: theme.palette.primary.main,
  //           }
  //         }
  //       },
  //     },
  //   },
    h1: {
      fontSize: "40px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 'bold',
      color: 'white'
    },
  //   h2: {
  //     fontSize: "2vw",
  //     fontFamily: theme.typography.fontFamily,
  //     fontWeight: 600,
  //     lineHeight: 1,
  //     [theme.breakpoints.down('xxl')]: {
  //       // fontSize: '3vw'
  //     },
  //     [theme.breakpoints.down('xl')]: {
  //       // fontSize: '4vw'
  //     },
  //     [theme.breakpoints.down('lg')]: {
  //       // fontSize: '4.5vw'
  //     },
  //     [theme.breakpoints.down('md')]: {
  //       // fontSize: '5vw'
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       // fontSize: '7vw'
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //   },
  //   h3: {
  //     fontSize: "1.5vw",
  //     fontFamily: theme.typography.fontFamily,
  //     fontWeight: 600,
  //     lineHeight: 1,
  //     [theme.breakpoints.down('xxl')]: {
  //       // fontSize: '2vw'
  //     },
  //     [theme.breakpoints.down('xl')]: {
  //       // fontSize: '3vw'
  //     },
  //     [theme.breakpoints.down('lg')]: {
  //       // fontSize: '3.5vw'
  //     },
  //     [theme.breakpoints.down('md')]: {
  //       // fontSize: '4vw'
  //     },
  //     [theme.breakpoints.down('sm')]: {
  //       // fontSize: '5vw'
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //   },
  //   h4: {
  //     fontSize: "28px",
  //     fontFamily: theme.typography.fontFamily,
  //     fontWeight: 600,
  //     lineHeight: 1,
  //     [theme.breakpoints.down('sm')]: {
  //       fontSize: '20px'
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //   },
  //   h5: {
  //     fontSize: "20px",
  //     fontFamily: theme.typography.fontFamily,
  //     fontWeight: 600,
  //     lineHeight: .9,
  //     [theme.breakpoints.down('sm')]: {
  //       fontSize: '16px'
  //     },
  //     "&::selection": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //   },
  }
}

theme = createTheme(theme, themeOption)

export default theme;

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    withIcon: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}