import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';
import {createTheme} from '@mui/material'
import { typography } from './typography';
import { components } from './components';
import { IBorderRadius } from './types';

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
      main: "#4545ff"
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
  components: components(theme),
  typography: typography(theme)
}

theme = createTheme(theme, themeOption)

export default theme;

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    borderRadius: IBorderRadius;
  }
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