import React from 'react'
import { ShoppingCart, Package  } from '@phosphor-icons/react'
import { CardProduct } from '../components/Card/CardProduct'

export const Home = () => {
  return (
    <div className='px-40 font-roboto font-[400]'>
      <div className='flex gap-14 '>
        <div>
          <h1 className='font-baloo text-base-title font-[800] text-[48px] leading[62.4px] pb-4 '>Encontre o café perfeito para qualquer hora do dia</h1> 
          <p className='text-base-subtitle  text-[20px] leading-[26px] '>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
          <div className='flex flex-wrap justify-between pt-[66px]'>
            <strong className='flex items-center gap-2 pb-5 text-base-text text-[16px] font-[400] w-[50%] '><i className='bg-yellow-dark text-white rounded-full p-2' ><ShoppingCart size={16} weight='fill' /></i> Compra simples e segura </strong>
            <strong className='flex items-center gap-2 pb-5 text-base-text text-[16px] font-[400] w-[50%] '><i className='bg-base-text text-white rounded-full p-2' ><ShoppingCart size={16} weight='fill' /></i> Embalagem mantém o café intacto </strong>
            <strong className='flex items-center gap-2 pb-5 text-base-text text-[16px] font-[400] w-[50%] '><i className='bg-yellow text-white rounded-full p-2' ><ShoppingCart size={16} weight='fill' /></i> Entrega rápida e rastreada </strong>
            <strong className='flex items-center gap-2 pb-5 text-base-text text-[16px] font-[400] w-[50%] '><i className='bg-purple text-white rounded-full p-2' ><ShoppingCart size={16} weight='fill' /></i> O café chega fresquinho até você </strong>
          </div>

        </div>
        <img src="../../src/assets/imagem.svg" alt="" />
      </div>
      <div className='flex flex-col'>
        <h2 className='font-baloo text-[42px] font-[800] text-base-subtitle leading-[41.6px] py-14'>Nossos cafés</h2>
        <div className='flex flex-wrap gap-8 justify-center'>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
        </div>
      </div>
    </div>
  )
}
