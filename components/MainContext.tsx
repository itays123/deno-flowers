import React from 'https://dev.jspm.io/react';

export interface MainContextProviderProps {
  children?: any;
}

// @ts-ignore
export const MainContext = React.createContext();

const MainContextProvider = ({ children }: MainContextProviderProps) => {
  // @ts-ignore
  const fetchAllFlowers = () => fetch('/flowers').then(res => res.json());
  const fetchLikeFlower = (id: string, value: number) =>
    fetch(`/flowers/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ value }),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json());
  const fetchShopFlower = (id: string) =>
    fetch(`/shop/${id}`, { method: 'POST' }).then(res => res.json());

  const server = { fetchAllFlowers, fetchLikeFlower, fetchShopFlower };
  return <MainContext.Provider value={server}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
