import React from 'react'
import { ButtonSelectQuantity } from '../Button/ButtonSelectQuantity'
import { ButtonCart } from '../Button/ButtonCart'

export type CardProductProps = {
    id: string,
    coffee: string,
    description: string,
    imgCoffee: string,
    value: number,
    typeTags: string[], //array pois pode ter várias tags
}

export const CardProduct = ({id, coffee, imgCoffee, value, typeTags, description }:CardProductProps) => {
  return (
    <div className='bg-base-card flex flex-col items-center rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] rounded-2 px-6 py-5 min-w-[256px] w-full max-w-[47.1%] xl:max-w-[31.07%] 2xl:max-w-[23%] justify-between'>
        <img src={imgCoffee} alt="" className='-mt-10 h-30 w-30 pb-3' />
        <div className='flex gap-1'>
          {typeTags.map((data :string )=>(
            <strong key={data} className='bg-yellow-light text-yellow-dark font-[700] text-[10px] uppercase rounded-full px-2 py-1'>{data}</strong>
            ))}
        </div>
        <div className='flex flex-col gap-2 pt-4 pb-[33px]'>
            <h5 className='text-center font-[700] font-baboo text-[20px] leading-[26px]'>{coffee}</h5>
            <p className='text-base-label leading-[18.2px] text-[14px] text-center break-normal '>{description}</p>
        </div>
        <div className='flex w-full justify-between items-center text-base-text'>
            <p className='text-[12px]'>R$ <strong className='font-[800] text-[24px] leading-[31.2px]'>{value.toFixed(2).toString().replace(".",",")}</strong></p>
            <div className='flex gap-2'>
                <ButtonSelectQuantity productId={id} />
                <ButtonCart productId={id}/>
            </div>
        </div>
    </div>
  )
}
