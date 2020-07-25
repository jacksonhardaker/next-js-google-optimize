import Head from 'next/head';
import { createContext, useContext, useEffect } from 'react';

export const GoogleOptimizeContext = createContext();

export const WithGoogleOptimize = ({ children, optimizeKey, analyticsKey }) => {

  const activate = () => window?.dataLayer?.push({'event': 'optimize.activate'});

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', analyticsKey);
  }, []);

  useEffect(() => {
    activate();
  });

  const value = {
    optimizeKey,
    analyticsKey,
    activate,
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
