import React from 'react'
import {ShoppingCart} from "@phosphor-icons/react"
import { useStateContext } from '../../context/StateContext'


export const ButtonShoppingCart = () => {
  const {itemsOnCart} = useStateContext()

  return (
    <button className='bg-yellow-light text-base-white p-2 rounded-[6px] h-[38px] font-roboto font-[400] text-[12px] relative'>
        <i>
            <ShoppingCart size={22} weight='fill' className="text-yellow-dark" />
        </i>
        <div className='bg-yellow-dark text-yellow-light flex items-center justify-center  absolute top-[-8px] right-[-8px]  rounded-full w-5 h-5'>
            {itemsOnCart.length}
        </div>
    </button>
  )
}
