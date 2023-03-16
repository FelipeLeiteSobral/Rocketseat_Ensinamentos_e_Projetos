import React from 'react'

export const NoTasksCreated = () => {
  return (
    <div className='w-full p-16 bg-gray-900 max-w-[50%] w-full flex flex-col items-center text-gray-500 rounded-lg border-gray-800 border-t-[1px]'>
        <img src="../../src/assets/PaperIcon.svg" className='pb-4' alt="" />
        <p><b>Você ainda não tem tarefas cadastradas</b></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

