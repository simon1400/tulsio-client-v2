import { FC, ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useSelector } from "react-redux";
import { selectDescription, selectTitle } from "stores/slices/dataSlices";
import { selectAllMeta } from "stores/slices/metaSlices";
// import CustomAlert from "components/Alert";
import { selectModalState } from "stores/slices/modalSlices";

const DOMAIN = process.env.APP_DOMAIN;

interface IPage {
  children: ReactNode | ReactNode[];
  id?: string;
  className?: string;
}

const Page: FC<IPage> = ({ children, className = "", id = "" }) => {
  const router = useRouter();

  const title = useSelector(selectTitle);
  const modalState = useSelector(selectModalState);
  const description = useSelector(selectDescription);
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
  } = useSelector(selectAllMeta);

  const global = {
    site_url: siteUrl,
    facebook_app_id: "",
    defaultTitle: siteName || "Tulsio",
    defaultDescription: siteName || "Tulsio",
    defaultImage: siteUrl,
    defaultTwitter: "@cereallarceny",
    defaultSep: " | ",
    gtm: "GTM-PQFGK4R",
  };

  const theTitle = title
    ? title + global.defaultSep + global.defaultTitle
    : global.defaultTitle;
  const theDescription = description ? description : global.defaultDescription;
  const theImage = image ? image : global.defaultImage;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        {/* FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="theme-color" content={themeColor} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link
          rel="alternate"
          hrefLang="cs"
          href={DOMAIN + "/cs" + (router.asPath !== "/" ? router.asPath : "")}
        />
        <link
          rel="canonical"
          href={global.site_url + (router.asPath !== "/" ? router.asPath : "")}
        />
        <meta itemProp="name" content={theTitle} />
        <meta itemProp="description" content={theDescription} />
        <meta itemProp="image" content={theImage} />
        <meta name="description" content={theDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteName.toUpperCase()} />
        <meta name="twitter:title" content={ogTitle || theTitle} />
        <meta
          name="twitter:description"
          content={ogDescription || theDescription}
        />
        <meta name="twitter:image:src" content={theImage} />
        <meta property="og:title" content={ogTitle || theTitle} />
        <meta property="og:type" content={contentType} />
        <meta property="og:url" content={global.site_url + (router.asPath !== "/" ? router.asPath : "")} />
        <meta property="og:image" content={theImage} />
        <meta
          property="og:description"
          content={ogDescription || theDescription}
        />
        <meta property="og:site_name" content={siteName.toUpperCase()} />
        <meta property="fb:app_id" content={global.facebook_app_id} />

        {published && (
          <meta name="article:published_time" content={published} />
        )}
        {category && <meta name="article:section" content={category} />}
        {updated && <meta name="article:modified_time" content={updated} />}
        {noCrawl && <meta name="robots" content="noindex, nofollow" />}
        {tags && <meta name="article:tag" content={tags} />}
      </Head>

      {/*<!-- Google Tag Manager -->*/}
      <Script defer strategy="lazyOnload" id="gtm">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.rel='preconnect';j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${global.gtm}');`}
      </Script>
      {/*<!-- End Google Tag Manager -->*/}

      {/* <Script type="text/javascript" src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js" /> */}

      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id='${global.gtm}'}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}

      <main id={id} className={className}>
        {children}
      </main>

      {/* {modalState === "success" && (
        <CustomAlert
          openData={modalState === "success"}
          type="success"
          content="Váš e-mail je v pořádku odeslán."
        />
      )} */}
      {/* {modalState === "error" && (
        <CustomAlert
          openData={modalState === "error"}
          type="error"
          content="Zadaný e-mail není platný."
        />
      )} */}
    </>
  );
};

export default Page;
