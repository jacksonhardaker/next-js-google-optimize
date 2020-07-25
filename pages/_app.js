import { WithGoogleOptimize } from '../src/context/WithGoogleOptimize';

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <WithGoogleOptimize optimizeKey="OPT-KFBTF6S" analyticsKey="UA-164498009-2">
        <Component {...pageProps} />
      </WithGoogleOptimize>
    </>
  )
};

export default _App;
