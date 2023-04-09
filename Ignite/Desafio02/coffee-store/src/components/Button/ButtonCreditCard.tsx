import React from 'react'
import {CreditCard} from "@phosphor-icons/react"

export const ButtonCreditCard = () => {
  return (
    <button className='bg-base-button hover:bg-base-hover text-base-text hover:text-base-subtitle focus:bg-black flex items-center justify-center w-full max-w-[284px] p-4 rounded-[6px] font-roboto font-[400] text-[12px] transition ease-in-out duration-200 flex justify-center items-center gap-2'>
        <i>
          <CreditCard size={16} className='text-purple-dark'/>
        </i>
        CARTÃO DE CRÉDITO
    </button>
  )
}
