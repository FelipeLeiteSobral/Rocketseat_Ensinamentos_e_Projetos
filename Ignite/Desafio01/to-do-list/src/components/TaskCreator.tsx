import React, { useState, ChangeEvent, FormEvent } from 'react'

type TaskCreatorProps = {
    handleAddTask : (taskDescription:string) => void,

}

export const TaskCreator = ({handleAddTask}:TaskCreatorProps) => {
  const [newTaskText, setNewTaskText] = useState("")

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
    handleAddTask(newTaskText);
    setNewTaskText("");
  } 

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  const isNewTaskTextEmpty = newTaskText.length === 0 

  return (
    <div className='w-full flex justify-center'>
    <form 
          className='max-w-[50%] w-full flex items-center justify-center gap-2 m-[-28px]'
          onSubmit={handleCreateNewTask}
          >
      <input  
            onChange={handleNewTaskChange}
            value={newTaskText}
            type="text" 
            className='w-full p-4 rounded-lg bg-gray-800 font-[500] outline-none text-white' 
            placeholder='Adicione uma nova tarefa'
      />
      <button 
            className='flex items-center gap-2 justify-center py-4 px-6 bg-DarkBlue rounded-lg hover:bg-Blue ease-in duration-150 transition tracking-wide text-white font-semibold'
            type='submit'
            disabled={isNewTaskTextEmpty}
            >Criar 
            <img 
                src="../../src/assets/PlusIcon.svg" 
                alt="" 
                />
      </button>
    </form>
    </div>
  )
}
