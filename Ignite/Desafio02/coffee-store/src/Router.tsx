import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { CheckoutFilled } from "./pages/CheckoutFilled"
import { Success } from "./pages/Success"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/checkoutFilled" element={<CheckoutFilled/>}/>
          <Route path="/success" element={<Success/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router