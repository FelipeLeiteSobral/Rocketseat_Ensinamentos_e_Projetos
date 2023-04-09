import React from 'react'
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { Input } from '../components/Input/Input'
import { ButtonCreditCard } from '../components/Button/ButtonCreditCard'
import { ButtonSelectQuantity } from '../components/Button/ButtonSelectQuantity'
import { ButtonRemove } from '../components/Button/ButtonRemove'
import { Button } from '../components/Button/Button'

export const Checkout = () => {
  return (
    <form action='' className='flex px-40 font-roboto font-[400] gap-8'>
      <div className='flex flex-col gap-3 w-full'>
        <h4 className='font-[700] font-baloo text-[18px] leading-[23.4px] text-base-subtitle'>Complete seu pedido</h4>
        <div className='bg-base-card rounded-[6px] p-10 flex flex-col gap-8'>
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
        </div>
        <div className='bg-base-card rounded-[8px] p-10 flex flex-col gap-8'>
          <div className='flex gap-2'>
            <i><CurrencyDollar size={22} className='text-purple'/></i>
            <div>
              <strong className='flex gap-2 text-base-subtitle text-[16px] font-[400]'>Pagamento</strong>
              <p className='text-[14px] leading-[18.2px] text-base-text'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>
          <div className='flex gap-3 justify-between'>
            <ButtonCreditCard/>
            <ButtonCreditCard/>
            <ButtonCreditCard/>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 min-w-[448px]'>
        <h4 className='font-[700] font-baloo text-[18px] leading-[23.4px] text-base-subtitle'>Cafés selecionados</h4>
        <div className='bg-base-card rounded-[6px] rounded-tr-[44px] rounded-bl-[44px] p-10 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-5'>
              <img src="../../src/assets/Havaiano.svg" className='w-16 h-16' alt="" />
              <div className='flex-col w-full'>
                <div className='flex gap-[50px] justify-between w-full pb-2'>
                  <strong className='flex gap-2 text-base-subtitle text-[16px] font-[400]'>Expresso Tradicional</strong>
                  <strong className='flex gap-1 text-base-text font-[700] text-[16px]'>R$ <p>9,90</p></strong>
                </div>
                <div className='flex gap-2'>
                  <ButtonSelectQuantity/>
                  <ButtonRemove/>
                </div>
              </div>
            </div>
            <div className='w-full h-0 border-[1px] border-base-button mt-6'></div>
          </div>
          <div className='flex-col gap-3'>
            <div className='flex justify-between'>
              <strong>Total itens</strong>
              <p>R$ 29,70</p>
            </div>
            <div className='flex justify-between'>
              <strong>Entrega</strong>
              <p>R$ 3,50</p>
            </div>
            <div className='flex justify-between'>
              <strong>Total</strong>
              <p>R$ 33,20</p>
            </div>
            <div className='pt-3'>
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
