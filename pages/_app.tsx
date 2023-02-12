import { FC } from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { WithGraphQL } from "lib/api";
import theme from "styles/theme";
import createEmotionCache from "lib/createEmotionCache";
import Header from "layout/Header";
import "styles/global.scss";
import { globalVariables } from "styles/var";
import { wrapper } from "../stores";
import { Provider } from "react-redux";
import Footer from "layout/Footer";
import GranimComponent from "components/Granim";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={{ ...theme, ...globalVariables }}>
          <CssBaseline />
          <WithGraphQL>
            <Header />
            <Component {...pageProps} />
            <Footer />
            {/* <CookieConsent /> */}
            <GranimComponent />
          </WithGraphQL>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
