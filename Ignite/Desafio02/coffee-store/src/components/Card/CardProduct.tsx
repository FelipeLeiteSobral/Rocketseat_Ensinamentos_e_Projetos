import React from 'react'
import { ButtonSelectQuantity } from '../Button/ButtonSelectQuantity'
import { ButtonCart } from '../Button/ButtonCart'

export const CardProduct = () => {
  return (
    <div className='bg-base-card flex flex-col items-center rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] rounded-2 px-6 py-5 min-w-[256px] max-w-[22%] justify-center break-normal'>
        <img src="../../src/assets/Capuccino.svg" alt="" className='-mt-10 h-30 w-30 pb-3' />
        <div className='flex gap-1'>
          <strong className='bg-yellow-light text-yellow-dark font-[700] text-[10px] uppercase rounded-full px-2 py-1'>tradicional</strong>
          <strong className='bg-yellow-light text-yellow-dark font-[700] text-[10px] uppercase rounded-full px-2 py-1'>tradicional</strong>
        </div>
        <div className='flex flex-col gap-2 pt-4 pb-[33px]'>
            <h5 className='text-center font-[700] font-baboo text-[20px] leading-[26px]'>Expresso Tradicional</h5>
            <p className='text-base-label leading-[18.2px] text-[14px] text-center break-normal '>O tradicional café feito com água quente e grãos moídos</p>
        </div>
        <div className='flex w-full justify-between items-center text-base-text'>
            <p className='text-[12px]'>R$ <strong className='font-[800] text-[24px] leading-[31.2px]'>9,90</strong></p>
            <div className='flex gap-2'>
                <ButtonSelectQuantity/>
                <ButtonCart/>
            </div>
        </div>
    </div>
  )
}
