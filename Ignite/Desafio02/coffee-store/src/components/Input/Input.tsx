import React from 'react'

type InputProps = {
  tipo: "CEP" | "Rua" | "Numero" | "Complemento" | "Bairro" | "Cidade" | "UF" 
}

export const Input = ({tipo}:InputProps) => {
  return (
    <>
      {(tipo === "CEP") ? (
        <label htmlFor="">
            <input type='field' placeholder='CEP' maxLength={8} className='bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]'/>
        </label>) : 
      (tipo === "Rua") ? (
      <label htmlFor="">
          <input type='field' placeholder='Rua' maxLength={8} className='bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]'/>
      </label>
      ) : 
      (tipo === "Numero") ? (
        <label htmlFor="">
            <input type='field' placeholder='Numero' maxLength={8} className='bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]'/>
        </label>
        ) :
      (tipo === "Complemento") ? (
        <label htmlFor="" className='w-full'>
            <input type='field' placeholder='Complemento' maxLength={8} className='bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]'/>
        </label>
        ) :
      (tipo === "Bairro") ? (
        <label htmlFor="">
            <input type='field' placeholder='Bairro' maxLength={8} className='bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]'/>
        </label>
        ) :
      (tipo === "Cidade") ? (
        <label htmlFor="" className='w-full'>
            <input type='field' placeholder='Cidade' maxLength={8} className='bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]'/>
        </label>
        ) :
      (tipo === "UF") ? (
        <label htmlFor="">
            <input type='field' placeholder='UF' maxLength={8} className='bg-base-input text-base-label p-3 min-w-[72px] outline-none rounded-[4px]'/>
        </label>
        ) : (<></>)
      }
    </>
  )
}
