import React from 'react'
import { MapPinLine } from '@phosphor-icons/react'
import { Input } from '../components/Input/Input'

export const Checkout = () => {
  return (
    <div className='px-40 font-roboto font-[400]'>
      <div className=''>
        <h4>Complete seu pedido</h4>
        <form action="" className='bg-base-card rounded-[8px] p-10 flex flex-col gap-8'>
          <div className='flex gap-2'>
            <i><MapPinLine size={22} className='text-yellow-dark'/></i>
            <div>
              <strong className='flex gap-2 text-base-subtitle text-[16px] font-[400]'>Endereço de Entrega</strong>
              <p className='text-[14px] leading-[18.2px] text-base-text'>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Input/>
            <Input/>
            <div className='flex gap-3'>
              <Input/>
              <Input/>
            </div>
            <div className='flex gap-3'>
              <Input/>
              <Input/>
              <Input/>
            </div>
          </div>
        </form>
      </div>
      <div>

      </div>
    </div>
  )
}
