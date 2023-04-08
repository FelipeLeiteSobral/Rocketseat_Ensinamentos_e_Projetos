import React from 'react'
import {Trash} from "@phosphor-icons/react"

export const ButtonRemove = () => {
  return (
    <button className='bg-base-button hover:bg-base-hover text-base-subtitle min-w-[91px] h-8 px-2 rounded-[6px] items-center justify-center font-roboto font-[400] text-[12px] transition ease-in-out duration-200 flex justify-center items-center gap-1'>
        <i>
          <Trash size={16} className='text-purple-dark'/>
        </i>
        REMOVE
    </button>
  )
}
