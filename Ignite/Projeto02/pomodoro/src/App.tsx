import { useState } from "react"
import { Button } from "./components/Button"

function App() {

    const [darkMode, setDarkMode] = useState(false)

    function handleDarkMode(){
      setDarkMode(!darkMode)
    }

  return (
    <div className={darkMode? 'dark' : ""}>
      <div className="w-screen h-screen bg-slate-700 gap-8 flex p-8 dark:bg-white">
        <button onClick={handleDarkMode} className="bg-white h-10 w-10 rounded-md dark:bg-gray-900 dark:text-white">OK</button>
        <Button children="Enviar" />
        <Button children="Enviar" variant="primary"/>
        <Button children="Enviar" variant="secondary"/>
        <Button children="Enviar" variant="danger"/>
        <Button children="Enviar" variant="success"/>
      </div>
    </div>
  )
}

export default App
