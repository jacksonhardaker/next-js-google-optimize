import { createContext, useContext, useState } from "react";

const wrapperContext = createContext();

export const CheckoutWrapper = ({ children, initialThing }) => {
  const [thing, setThing] = useState(initialThing);
  const value = { thing, setThing };
  return (
    <wrapperContext.Provider value={value}>
      {children}
    </wrapperContext.Provider>
  );
};

export const useCheckoutWrapper = () => useContext(wrapperContext) || {};
