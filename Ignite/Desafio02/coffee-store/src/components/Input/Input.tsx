import React from 'react'

export const Input = () => {
  return (
    <label htmlFor="">
        <input type='field' placeholder='CEP' maxLength={8} className='bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]'/>
    </label>
  )
}
