import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="cs">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src={`https://cdn-cookieyes.com/client_data/fa94095f15c62f6fd1c7afac/script.js`}
        />
      </body>
    </Html>
  );
}
