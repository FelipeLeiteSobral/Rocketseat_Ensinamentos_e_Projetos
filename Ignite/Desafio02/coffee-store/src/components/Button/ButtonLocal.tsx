import {MapPin} from "@phosphor-icons/react"
import React from 'react'

export const ButtonLocal = () => {
  return (
    <button className='bg-base-button hover:bg-base-hover text-purple-dark min-w-[143px] h-[38px] px-2 rounded-[6px] items-center justify-center font-roboto font-[400] text-[14px] transition ease-in-out duration-200 flex justify-center items-center gap-1'>
        <i>
          <MapPin weight="fill" size={22} className='text-purple-dark'/>
        </i>
        Aracaju, SE
    </button>
  )
}
