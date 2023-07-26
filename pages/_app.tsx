import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="google-site-verification" content="uBcstM5PFdnDge1piXSyCrThmHQuM2oqryu7O_-mRkY" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
