import { ThemeProvider } from "@emotion/react"
import Button from "components/Button"
import Page from "layout/Page"
import lightTheme from "styles/lightTheme"

const ShopSeller = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Page light>
        <Button>adsfgdsf</Button>
      </Page>
    </ThemeProvider>
  )
}

export default ShopSeller