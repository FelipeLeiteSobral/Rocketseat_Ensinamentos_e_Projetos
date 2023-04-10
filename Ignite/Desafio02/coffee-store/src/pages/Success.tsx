import { CurrencyDollar, MapPin, ShoppingCart, Timer } from '@phosphor-icons/react'
import React from 'react'

export const Success = () => {
  return (
    <div className='px-40 font-roboto font-[400] pt-20'>
      <h1 className='text-yellow-dark font-[800] font-baloo text-[32px] leading-[42px] '>Uhu! Pedido confirmado</h1>
      <p className='text-[20px] leading-[26px] text-base-subtitle pt-1 pb-10'>
        Agora é só aguentar que logo o café chegará até você
      </p>
      <div className='flex flex-wrap gap-10 justify-between'>
        <div className='flex bg-gradient-to-r from-yellow to-purple rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] rounded-2 p-[1px] min-w-[430px] w-full xl:max-w-[50%] justify-center break-normal'>
          <div className='flex flex-col gap-8 bg-white w-full rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] p-10'>
            <div className='flex items-center gap-3 text-base-text text-[16px] font-[400]'>
              <i className='bg-purple text-white rounded-full p-2' ><MapPin size={16} weight='fill' /></i> 
              <div>
                <p>Entrega em <span className='font-[700]'>Rua João Daniel Martinelli, 102</span></p> 
                <p>Farrapos - Porto Alegre, RS</p> 
              </div>
            </div>            
            <div className='flex items-center gap-3 text-base-text text-[16px] font-[400]'>
              <i className='bg-yellow text-white rounded-full p-2' ><Timer size={16} weight='fill' /></i> 
              <div>
                <p>Previsão de entrega</p> 
                <p className='font-[700]'>Farrapos - Porto Alegre, RS</p> 
              </div>
            </div>            
            <div className='flex items-center gap-3 text-base-text text-[16px] font-[400]'>
              <i className='bg-yellow-dark text-white rounded-full p-2' ><CurrencyDollar size={16} /></i>  
              <div>
                <p>Pagamento na entrega</p> 
                <p className='font-[700]'>Cartão de Crédito</p> 
              </div>
            </div>            
          </div>
        </div>
        <div className='flex'>
          <img src="../../src/assets/Illustration.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
