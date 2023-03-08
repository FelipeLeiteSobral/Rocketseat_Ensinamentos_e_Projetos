import React from 'react'

export const TaskCreator = () => {
  return (
    <form className='max-w-[80%] flex items-center justify-center'>
      <input type="text" className='w-full'/>
      <button>Criar <img src="../../src/assets/PlusIcon.svg" alt="" /></button>
    </form>
  )
}
