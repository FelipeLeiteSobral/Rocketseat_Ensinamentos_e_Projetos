import React, {createContext, useContext, useState, useEffect} from 'react'
import {data} from '../data/data'

export type DataCoffeeProps = {
  id: string,
  coffee: string,
  description: string,
  imgCoffee: string,
  quantityToAddOnCart: number,
  quantityAddOnCart: number,
  value: number,
  typeTags: string[]
}

export type ItemsOnCartProps = {
  id: string,
  coffee: string,
  description: string,
  imgCoffee: string,
  quantityToAddOnCart: number,
  quantityAddOnCart: number,
  value: number,
  typeTags: string[]
}

type ContextType = {
  dataCoffee: DataCoffeeProps[],
  itemsOnCart: ItemsOnCartProps[],
  quantityToAddOnCart: number,
  quantityToBuy: number,
  setDataCoffee: (data: any) => void
  setQuantityToBuy: (quantity: any) => void,
  setItemsOnCart: (data: any) => void
}

const Context = createContext({} as ContextType);

export const StateContext = ({children}: any) => {
    
    const [dataCoffee, setDataCoffee] = useState(data)
    const [itemsOnCart, setItemsOnCart] = useState([])
    const [quantityToBuy, setQuantityToBuy] = useState(5)
    const [quantityToAddOnCart, setQuantityToAddOnCart] = useState(0)

  return (
    <Context.Provider 
      value={{
        itemsOnCart,
        quantityToAddOnCart,
        quantityToBuy,
        dataCoffee,
        setDataCoffee,
        setItemsOnCart,
        setQuantityToBuy,
    }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);