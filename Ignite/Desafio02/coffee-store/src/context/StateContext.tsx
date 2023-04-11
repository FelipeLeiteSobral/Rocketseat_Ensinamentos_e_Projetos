import React, {createContext, useContext, useState, useEffect} from 'react'

const Context = createContext({});

export const StateContext = ({children}: any) => {
    
    const [itemsOnCart, setItemsOnCart] = useState(0)
    const [quantityAddOnCartByItem, setQuantityAddOnCartByItem] = useState(0)

  return (
    <Context.Provider value={{
      itemsOnCart,
      quantityAddOnCartByItem,

    }}>
      {children}
    </Context.Provider>
  )
}
