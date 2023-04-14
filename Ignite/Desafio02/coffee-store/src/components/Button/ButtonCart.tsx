import React from 'react'
import {ShoppingCartSimple} from "@phosphor-icons/react"
import { DataCoffeeProps, useStateContext } from '../../context/StateContext'

type ButtonCartProps = {
  productId: string
}

export const ButtonCart = ({productId} : ButtonCartProps) => {
  const {itemsOnCart, dataCoffee, setItemsOnCart, setDataCoffee} = useStateContext()

  function handleAddItemOnCart(){
    const foundProduct = dataCoffee.find((product) => product.id === productId)

    if (itemsOnCart.length < 1){
      console.log('nenhum produto')
      return setItemsOnCart(() => {return {...foundProduct, quantityAddOnCart:foundProduct?.quantityToAddOnCart}})
    }
    else{
      if(itemsOnCart.length > 0){
        console.log("adicionar produto")
        const updatedItems = itemsOnCart.map((product) => {
          return {...product, quantityAddOnCart:1}
        })
        return setItemsOnCart(updatedItems)
      }
      console.log(itemsOnCart.length)
      return setItemsOnCart(() => {return {...foundProduct}})
    }
  }

  return (
    <button onClick={handleAddItemOnCart} className='bg-purple-dark hover:bg-purple text-base-white flex justify-center items-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[12px] transition ease-in-out duration-200'>
        <i>
            <ShoppingCartSimple size={20} weight='fill' className="text-white" />
        </i>
    </button>
  )
}
