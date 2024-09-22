import type { Theme as MuiTheme, ThemeOptions } from '@mui/material'
import type { IBorderRadius, IGlobalGap, IGlobalPadding } from './types'
import { createTheme } from '@mui/material'

import { components } from './components'
import { typography } from './typography'

let lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 980,
      lg: 1200,
      xl: 1440,
      xxl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4545ff',
    },
    secondary: {
      main: 'rgba(43, 43, 43, .07)',
    },
    text: {
      primary: '#000',
      secondary: '#2b2b2b',
    },
    background: {
      default: '#ffffff',
      paper: 'radial-gradient(circle at 59% 100%, #fff, rgba(255, 255, 255, 0.65) 95%)',
    },
  },
  typography: {
    fontFamily: 'Manrope',
  },
  spacing: 5,
})

const themeOption: ThemeOptions = {
  components: components(lightTheme),
  typography: typography(lightTheme),
}

lightTheme = createTheme(lightTheme, themeOption)

export default lightTheme

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    borderRadius: IBorderRadius
    globalGap: IGlobalGap
    globalPadding: IGlobalPadding
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true
  }
}
