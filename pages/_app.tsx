import {FC} from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import {DataProvider} from '../context/dataStateContext.js'
import { WithGraphQL } from 'lib/api'
import theme from 'styles/theme';
import createEmotionCache from 'lib/createEmotionCache';
import Header from 'layout/Header'
import 'styles/global.scss'

// const Header = dynamic(() => import(''), {suspense: true})
// const Footer = dynamic(() => import('layout/Footer'), {suspense: true}) 
// const CookieConsent = dynamic(() => import('components/CookieConsent'), {suspense: true})

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {

  const {
    published,
    category,
    updated,
    noCrawl,
    tags,
    title,
    description,
    image,
    ogTitle,
    ogDescription,
    contentType
  } = props.pageProps

  const router = useRouter()

  const global = {
    site_url: process.env.NODE_ENV === 'development' ? 'http://localhost:3004/cs' : 'https://tulsio.com/cs',
    facebook_app_id: '',
    defaultTitle: 'Tulsio',
    defaultDescription: 'Tulsio',
    defaultImage: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3004/cs' : 'https://tulsio.com/cs'}`,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' | ',
    gtm: ''
  }
  
  const [meta, setMeta] = useState({
    title: title || undefined,
    description: description || undefined,
    image: {
      data: null
    }
  })

  useEffect(() => {
    if(title || description){
      setMeta((prevState) => ({
        ...prevState,
        title: title,
        description: description
      }))
    }
  }, [title, description])
  
  const theTitle = meta.title ? (meta.title + global.defaultSep + global.defaultTitle) : global.defaultTitle;
  const theDescription = meta.description ? meta.description : global.defaultDescription;
  const theImage = image ? image : global.defaultImage;

  const clientSideEmotionCache = createEmotionCache();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DataProvider>
          <WithGraphQL>
            <Head>

              <meta charSet="utf-8" />

              {/* FAVICON */}
              <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
              <link rel="manifest" href="/favicon/site.webmanifest" />
              <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
              <link rel="shortcut icon" href="/favicon/favicon.ico" />
              <meta name="msapplication-TileColor" content="#0000ff" />
              <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
              <meta name="theme-color" content="#0000ff" />

              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>{theTitle}</title>
              <link rel="canonical" href={global.site_url+(router.asPath !== '/' ? router.asPath : '')} />
              <meta itemProp="name" content={theTitle} />
              <meta itemProp="description" content={theDescription} />
              <meta itemProp="image" content={theImage} />
              <meta name="description" content={theDescription} />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="TULSIO" />
              <meta name="twitter:title" content={ogTitle || theTitle} />
              <meta name="twitter:description" content={ogDescription || theDescription} />
              <meta name="twitter:image:src" content={theImage} />
              <meta property="og:title" content={ogTitle || theTitle} />
              <meta property="og:type" content={contentType || 'website'} />
              <meta property="og:url" content={global.site_url+router.asPath} />
              <meta property="og:image" content={theImage} />
              <meta property="og:description" content={ogDescription || theDescription} />
              <meta property="og:site_name" content="TULSIO" />
              <meta property="fb:app_id" content={global.facebook_app_id} />

              {published && <meta name="article:published_time" content={published} />}
              {category && <meta name="article:section" content={category} />}
              {updated && <meta name="article:modified_time" content={updated} />}
              {noCrawl && <meta name="robots" content="noindex, nofollow" />}
              {tags && <meta name="article:tag" content={tags} />}

            </Head>

            {/*<!-- Google Tag Manager -->*/}
            <Script id="gtm">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.rel='preconnect';j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PQFGK4R');`}
            </Script>
            {/*<!-- End Google Tag Manager -->*/}

            <Script type="text/javascript" src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js" />

            {/*<!-- Google Tag Manager (noscript) -->*/}
            <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id='GTM-PQFGK4R'}`}
              height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
            {/*<!-- End Google Tag Manager (noscript) -->*/}
            <main>
              <Header />
              <Component {...pageProps} />
              {/* <Footer /> */}
              {/* <CookieConsent /> */}
            </main>
          </WithGraphQL>
        </DataProvider>
      </ThemeProvider>
    </CacheProvider>
  ) 
}

export default MyApp;