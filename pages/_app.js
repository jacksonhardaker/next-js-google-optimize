import Head from 'next/head';

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KFBTF6S"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
};

export default _App;
