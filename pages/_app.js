import { WithGoogleOptimize } from '../src/context/WithGoogleOptimize';
import { WithConditionalProvider } from '../src/components/utils/WithConditionalProvider';
import { CheckoutWrapper } from '../src/components/CheckoutWrapper';

const _App = ({ Component, pageProps }) => {
  const { wrapWithCheckout } = pageProps;

  return (
    <>
      <WithGoogleOptimize optimizeKey="OPT-KFBTF6S" analyticsKey="UA-164498009-2">
        <WithConditionalProvider conditional={wrapWithCheckout} Provider={CheckoutWrapper} initialThing="from _app.js">
          <Component {...pageProps} />
        </WithConditionalProvider>
      </WithGoogleOptimize>
    </>
  )
};

export default _App;
