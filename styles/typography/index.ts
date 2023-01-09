import { baseBody } from "./baseBody";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody(theme)
  },
  h1: {
    fontSize: "40px",
    ...baseHead(theme)
  },
  h2: {
    fontSize: "30px",
    ...baseHead(theme)
  },
  h3: {
    fontSize: "24px",
    ...baseHead(theme)
  },
  h4: {
    fontSize: "19px",
    ...baseHead(theme)
  },
  h5: {
    fontSize: "17px",
    ...baseHead(theme)
  },
})