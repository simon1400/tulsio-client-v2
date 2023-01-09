import { base } from "./base";
import { button } from "./button";

export const components = (theme: any) => ({
  MuiCssBaseline: base(theme),
  MuiButton: button(theme)
})