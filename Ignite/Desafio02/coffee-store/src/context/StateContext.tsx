import React, { createContext, useContext, useState, useEffect } from "react";
import { dataProducts } from "../data/dataProducts";
import { dataPayment } from "../data/dataPayment";

export type DataCoffeeProps = {
  id: string;
  coffee: string;
  description: string;
  imgCoffee: string;
  quantityToAddOnCart: number;
  quantityAddOnCart: number;
  value: number;
  typeTags: string[];
};

export type ItemsOnCartProps = {
  id: string;
  coffee: string;
  description: string;
  imgCoffee: string;
  quantityToAddOnCart: number;
  quantityAddOnCart: number;
  value: number;
  typeTags: string[];
};

type typePaymentProps = {
  booleanCred: boolean;
  booleanDeb: boolean;
  booleanDin: boolean;
};

type ContextType = {
  dataCoffee: DataCoffeeProps[];
  itemsOnCart: ItemsOnCartProps[];
  quantityToAddOnCart: number;
  quantityToBuy: number;
  typePayment: typePaymentProps[];
  setTypePayment: (data: any) => void;
  setDataCoffee: (data: any) => void;
  setQuantityToBuy: (quantity: any) => void;
  setItemsOnCart: (data: any) => void;
  setQuantityToAddOnCart: (quantity: any) => void
};

const Context = createContext({} as ContextType);

export const StateContext = ({ children }: any) => {
  const [dataCoffee, setDataCoffee] = useState(dataProducts);
  const [itemsOnCart, setItemsOnCart] = useState(StorageData);
  const [quantityToBuy, setQuantityToBuy] = useState(5);
  const [quantityToAddOnCart, setQuantityToAddOnCart] = useState(0);
  const [typePayment, setTypePayment] = useState(dataPayment);
 
  function StorageData() {
    const receiveLocalStorage = localStorage.getItem('@coffee-shop:cycles-state-1.0.0'); 
    if (receiveLocalStorage){
      return JSON.parse(receiveLocalStorage) 
    }
    return []
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(itemsOnCart);
    localStorage.setItem("@coffee-shop:cycles-state-1.0.0", stateJSON);
  }, [itemsOnCart]);

  return (
    <Context.Provider
      value={{
        itemsOnCart,
        quantityToAddOnCart,
        quantityToBuy,
        dataCoffee,
        typePayment,
        setDataCoffee,
        setItemsOnCart,
        setQuantityToBuy,
        setTypePayment,
        setQuantityToAddOnCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
