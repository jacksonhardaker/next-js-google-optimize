import { WithGoogleOptimize } from '../src/context/WithGoogleOptimize';

const Noop = ({ children }) => children;

const _App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || Noop;

  return (
    <>
      <WithGoogleOptimize optimizeKey="OPT-KFBTF6S" analyticsKey="UA-164498009-2">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithGoogleOptimize>
    </>
  )
};

export default _App;
