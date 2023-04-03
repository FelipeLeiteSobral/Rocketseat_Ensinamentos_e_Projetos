import React, { useState } from 'react'
import { TaskType } from '../App'

type TaskProps = {
    id: string;
    description: string;
    isFinished: boolean;
    onDeleteTask: (task: string) => void;
    onCompletedTask: (task: string) => void;
}

export const Task = ({id, description, isFinished, onDeleteTask, onCompletedTask}:TaskProps) => {
    const [boxChecked, setBoxChecked] = useState(false)
    
    function handleBoxChange(){
    setBoxChecked(boxChecked ? false : true)    
    onCompletedTask(id)
    return isFinished = !isFinished
    }
    
    function handleDeleteTask(){
    onDeleteTask(id)
    }

  return (
    <div className='w-full p-4 bg-gray-800 max-w-[50%] flex items-center justify-between text-white rounded-lg mt-4'>
        <div className='flex gap-4'>
            <img  
                    onClick={handleBoxChange}
                    src={`../../src/assets/${boxChecked ? "Checked":""}BoxIcon.svg`}
                    className='cursor-pointer'
                    alt="" 
            />
            <p className={`${boxChecked === true? "line-through text-gray-500" : "" }`}>{description}</p>
        </div>
        <img 
            onClick={handleDeleteTask}
            className='cursor-pointer'
            src="../../src/assets/TrashIcon.svg" 
            alt="" 
        />
    </div>
  )
}
