import { useState } from 'react'
import { Header} from './components/Header'
import { TaskCreator} from './components/TaskCreator'
import { TaskInfo} from './components/TaskInfo'
import { TaskList } from './components/TaskList'
import { NoTasksCreated } from './components/NoTasksCreated'
import { v4 as uuidv4 } from 'uuid';

export type TaskType = {
  id:string;
  description:string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  
  function handleAddTask(taskDescription:string){
    const newTask = {
      id : uuidv4(),
      description : taskDescription,
      isFinished : false,
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskIdToDelete:string){
    const taskNotDeletedById = tasks.filter(task => {
      return task.id !== taskIdToDelete
    });
    setTasks(taskNotDeletedById)
  }

  function completedTask(taskIdCompleted:string){
    const taskCompleted = tasks.filter(task => {
      if (task.id !== taskIdCompleted){
        return task;
      }
      else{
        return {
          ...task, isFinished: !task.isFinished
        }
      }
    })
    
    setTasks(taskCompleted)
  }

  const doHaveTask = tasks.length === 0 
  
  return (
    <div className='bg-gray-900 h-screen items-center flex flex-col'>
      <Header/>
      <TaskCreator handleAddTask={handleAddTask}/>
      <TaskInfo tasks={tasks}/>
        { doHaveTask ? (<NoTasksCreated/>) : (<TaskList tasks={tasks} onDeleteTask={deleteTask} onCompletedTask={completedTask}/>) }
    </div>
  )
}

export default App
