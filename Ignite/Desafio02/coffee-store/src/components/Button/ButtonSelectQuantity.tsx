import React from 'react'
import {Plus, Minus} from "@phosphor-icons/react"

export const ButtonSelectQuantity = () => {
  return (
    <button className='bg-base-button flex items-center justify-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[16px] transition-all ease-in-out duration-200 relative gap-2'>
        <i>
            <Minus size={14} className="text-purple hover:text-purple-dark" />
        </i>
        <div className='text-base-title'>
            3
        </div>
        <i>
            <Plus size={14} className="text-purple hover:text-purple-dark" />
        </i>
    </button>
  )
}
