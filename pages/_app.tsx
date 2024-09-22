import type { EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import type { FC } from 'react'

import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import GranimComponent from 'components/Granim'
import Footer from 'layout/Footer'
import Header from 'layout/Header'
import { WithGraphQL } from 'lib/api'
import createEmotionCache from 'lib/createEmotionCache'
import { Provider } from 'react-redux'
import lightTheme from 'styles/lightTheme'
import theme from 'styles/theme'
import { globalVariables } from 'styles/var'

import { wrapper } from '../stores'
import 'styles/global.scss'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const clientSideEmotionCache = createEmotionCache()
  const { emotionCache = clientSideEmotionCache, pageProps } = props

  const selectTheme = pageProps.light || pageProps?.embed === 'white' ? lightTheme : theme
  const embed = pageProps?.embed

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={{ ...selectTheme, ...globalVariables }}>
          <CssBaseline />
          <WithGraphQL>
            {!embed?.length && <Header />}
            <Component {...pageProps} />
            {!embed?.length && <Footer />}
            {!embed?.length && <GranimComponent />}
          </WithGraphQL>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default MyApp
