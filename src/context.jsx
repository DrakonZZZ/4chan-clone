import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [cartList, setCartlist] = useState([]);
  const [cartPrice, setCartprice] = useState([]);

  const totalSum = cartPrice.reduce((acc, cur) => acc + cur, 0);

  return (
    <GlobalContext.Provider
      value={{
        cart,
        cartList,
        cartPrice,
        totalSum,
        setCart,
        setCartlist,
        setCartprice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
