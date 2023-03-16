import React, { ChangeEvent, useState } from 'react'
import { TaskType } from '../App'
import { Task } from './Task'

type TaskListProps = {
  tasks:TaskType[];
  onDeleteTask: (task:string) => void;
  onCompletedTask: (task:string) => void;
}

export const TaskList = ({tasks, onDeleteTask, onCompletedTask} : TaskListProps) => {

  return (
    <div className='w-full flex items-center flex-col'>
      {tasks.map((task)=> {
        return (
          <Task 
                onCompletedTask={onCompletedTask}
                key={task.id}
                onDeleteTask={onDeleteTask} 
                id={task.id} 
                isFinished={task.isFinished} 
                description={task.description} 
          />
        )
      })}
    </div>
  )
}
