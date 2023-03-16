import React from 'react'
import { TaskType } from '../App'

type TaskInfoProps = {
  tasks:TaskType[]
}

export const TaskInfo = ({tasks}:TaskInfoProps) => {
  const isFinishedTasks = tasks.filter((task) => task.isFinished === true)
  return (
    <div className='flex justify-between w-full max-w-[50%] mt-24 mb-4 items-center'>
        <p className='font-semibold text-Blue'>Tarefas criadas <span className='bg-gray-600 rounded-xl px-2 text-white ml-2'>{tasks.length}</span></p>
        <p className='font-semibold text-Purple'>Concluidas <span className='bg-gray-600 rounded-xl px-2 text-white ml-2'>{tasks.length > 0 ? `${isFinishedTasks.length} de ${tasks.length}` : isFinishedTasks.length}</span></p>
    </div>
  )
}
