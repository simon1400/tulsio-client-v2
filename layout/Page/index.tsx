import type { FC, ReactNode } from 'react'

import { redirects } from 'helpers/redirects'
import { useOnMountUnsafe } from 'helpers/useOnMountUnsaf'
import Head from 'next/head'
import Script from 'next/script'
import { useSelector } from 'react-redux'
import { selectDescription, selectTitle } from 'stores/slices/dataSlices'
import { selectAllMeta } from 'stores/slices/metaSlices'
import { usePathname } from 'next/navigation'

const DOMAIN = process.env.APP_DOMAIN

interface IPage {
  children: ReactNode | ReactNode[]
  id?: string
  className?: string
}

const Page: FC<IPage> = ({ children, className = '', id = '' }) => {
  const pathname = usePathname()

  const title = useSelector(selectTitle)
  const description = useSelector(selectDescription)
  const {
    image,
    ogTitle,
    ogDescription,
    contentType,
    published,
    category,
    updated,
    tags,
    noCrawl,
    themeColor,
    siteName,
    siteUrl,
  } = useSelector(selectAllMeta)

  const global = {
    site_url: siteUrl,
    facebook_app_id: '',
    defaultTitle: siteName || 'Tulsio',
    defaultDescription: siteName || 'Tulsio',
    defaultImage: siteUrl,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' | ',
    gtm: 'GTM-PQFGK4R',
  }

  const theTitle = title ? title + global.defaultSep + global.defaultTitle : global.defaultTitle
  const theDescription = description || global.defaultDescription
  const theImage = image || global.defaultImage

  useOnMountUnsafe(async () => {
    const redirectsData = await redirects()
    redirectsData.map((item: any) => {
      if (item.source === pathname) {
        window.location.href = item.destination
      }
      return true
    })
  })

  const url = global.site_url + '/cs' + (pathname !== '/' ? pathname : '')

  console.log(url)

  return (
    <>
      <Head>
        <meta charSet={'utf-8'} />

        {/* FAVICON */}
        <link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicon/apple-touch-icon.png'} />
        <link rel={'manifest'} href={'/favicon/site.webmanifest'} />
        <link rel={'mask-icon'} href={'/favicon/safari-pinned-tab.svg'} color={'#5bbad5'} />
        <link rel={'shortcut icon'} href={'/favicon.ico'} />
        <meta name={'msapplication-config'} content={'/favicon/browserconfig.xml'} />
        <meta name={'msapplication-TileColor'} content={themeColor} />
        <meta name={'theme-color'} content={themeColor} />

        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <title>{theTitle}</title>

        <link rel={'alternate'} hrefLang={'cs'} href={url} />
        <link rel={'canonical'} href={url} />

        <meta itemProp={'name'} content={theTitle} />
        <meta itemProp={'description'} content={theDescription} />
        <meta itemProp={'image'} content={theImage} />
        <meta name={'description'} content={theDescription} />
        <meta name={'twitter:card'} content={'summary_large_image'} />
        <meta name={'twitter:site'} content={siteName.toUpperCase()} />
        <meta name={'twitter:title'} content={ogTitle || theTitle} />
        <meta name={'twitter:description'} content={ogDescription || theDescription} />
        <meta name={'twitter:image:src'} content={theImage} />
        <meta property={'og:title'} content={ogTitle || theTitle} />
        <meta property={'og:type'} content={contentType} />
        <meta property={'og:url'} content={url} />
        <meta property={'og:image'} content={theImage} />
        <meta property={'og:description'} content={ogDescription || theDescription} />
        <meta property={'og:site_name'} content={siteName.toUpperCase()} />
        <meta property={'fb:app_id'} content={global.facebook_app_id} />

        {published && <meta name={'article:published_time'} content={published} />}
        {category && <meta name={'article:section'} content={category} />}
        {updated && <meta name={'article:modified_time'} content={updated} />}
        {noCrawl && <meta name={'robots'} content={'noindex, nofollow'} />}
        {tags && <meta name={'article:tag'} content={tags} />}
      </Head>

      {/*<!-- Google Tag Manager -->*/}
      <Script defer strategy={'lazyOnload'} id={'gtm'}>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.rel='preconnect';j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${global.gtm}');`}
      </Script>
      {/*<!-- End Google Tag Manager -->*/}

      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id='${global.gtm}'}`}
          height={'0'}
          width={'0'}
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}

      <main id={id} className={className}>
        {children}
      </main>
    </>
  )
}

export default Page
