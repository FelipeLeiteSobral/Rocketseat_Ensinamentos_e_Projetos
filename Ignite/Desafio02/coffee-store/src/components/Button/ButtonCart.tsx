import React from 'react'
import {ShoppingCartSimple} from "@phosphor-icons/react"


export const ButtonCart = () => {
  return (
    <button className='bg-purple-dark hover:bg-purple text-base-white flex justify-center items-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[12px] transition ease-in-out duration-200'>
        <i>
            <ShoppingCartSimple size={20} weight='fill' className="text-white" />
        </i>
    </button>
  )
}
