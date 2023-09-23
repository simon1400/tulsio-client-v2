import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="cs">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src={`https://cdn-cookieyes.com/client_data/71b6214352e6736172d28e3b/script.js`}
        />
      </body>
    </Html>
  );
}
