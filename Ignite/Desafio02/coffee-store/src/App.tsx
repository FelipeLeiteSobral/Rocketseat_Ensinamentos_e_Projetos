import { BrowserRouter, Routes } from "react-router-dom"
import { Router } from "./Router"
import { StateContext } from "./context/StateContext"

function App() {

  return (
      <StateContext>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </StateContext>
  )
}

export default App
