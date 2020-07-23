import React from 'https://dev.jspm.io/react';
import { MainContext } from '../MainContext.tsx';

export interface FlowerContextProviderProps {
  children?: any;
}

// @ts-ignore
export const FlowerContext = React.createContext();

const FlowerContextProvider = ({ children }: FlowerContextProviderProps) => {
  // @ts-ignore
  const [flowers, setFlowers] = React.useState([]);
  // @ts-ignore
  const server = React.useContext(MainContext);
  const refresh = () =>
    server.fetchAllFlowers().then((flowers: any) => setFlowers(flowers));

  const getFlowerById = (id: string) => {
    return [...flowers].filter(flower => flower._id.$oid === id)[0];
  };
  // @ts-ignore
  React.useEffect(() => {
    refresh();
  }, []);

  const set = (id: string, field: string, value: any) => {
    let index = [...flowers].findIndex(flower => flower._id.$oid === id);
    if (index === -1) return;
    setFlowers((prevArr: any[]) => {
      let updated = [...prevArr];
      let prevFlower = prevArr[index];
      updated[index] = { ...prevFlower, [field]: value };
      return updated;
    });
  };
  return (
    <FlowerContext.Provider value={{ flowers, refresh, getFlowerById, set }}>
      {children}
    </FlowerContext.Provider>
  );
};

export default FlowerContextProvider;
