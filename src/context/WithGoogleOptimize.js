import Head from 'next/head';
import { createContext, useContext, useEffect, useState } from 'react';
import { useOnRouteChangeComplete } from '../hooks/useOnRouteChangeComplete';

export const GoogleOptimizeContext = createContext();

export const WithGoogleOptimize = ({ children, optimizeKey, analyticsKey }) => {
  const [foo, setFoo] = useState(null);

  const activate = (args = {}) => window?.dataLayer?.push({
    event: 'optimize.activate',
    ...args,
  });

  useOnRouteChangeComplete(activate, true);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', analyticsKey);
  }, []);

  const value = {
    optimizeKey,
    analyticsKey,
    activate,
    foo,
    setFoo,
  };

  return (
    <GoogleOptimizeContext.Provider value={value}>
      <Head>
        <script src={`https://www.googleoptimize.com/optimize.js?id=${optimizeKey}`}></script>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsKey}`}></script>
      </Head>
      {children}
    </GoogleOptimizeContext.Provider>
  );
};

export const useGoogleOptimize = () => {
  const context = useContext(GoogleOptimizeContext);

  if (!context) {
    throw new Error("Component must be a child of WithGoogleOptimize to use useGoogleOptimize");
  }

  return context;
};
