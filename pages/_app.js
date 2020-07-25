import Head from 'next/head';
import { useEffect } from 'react';

const _App = ({ Component, pageProps }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-164498009-2');
  }, []);
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KFBTF6S"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164498009-2"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default _App;
