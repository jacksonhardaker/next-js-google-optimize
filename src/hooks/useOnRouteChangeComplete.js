import Router from 'next/router';
import { useEffect } from 'react';

export const useOnRouteChangeComplete = (handler, callOnInit) => {

  const handleRouteChangeComplete = url => {
    handler({ url });
  }

  useEffect(() => {
    callOnInit && handleRouteChangeComplete();

    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    }
  }, [callOnInit]);
};
