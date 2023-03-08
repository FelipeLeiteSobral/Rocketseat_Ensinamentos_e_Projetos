import { useState } from 'react'
import { Header} from './components/Header'
import { TaskCreator} from './components/TaskCreator'
 
function App() {
  return (
    <div className='bg-gray-700 h-screen'>
      <Header/>
      <TaskCreator/>
    </div>
  )
}

export default App
