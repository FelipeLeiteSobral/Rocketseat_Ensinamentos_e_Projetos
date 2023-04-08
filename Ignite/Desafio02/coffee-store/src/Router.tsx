import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { CheckoutFilled } from './pages/CheckoutFilled'
import { Success } from './pages/Success'
import { DefaultLayout } from './DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Checkout/>}/>
          <Route path='/' element={<CheckoutFilled/>}/>
          <Route path='/' element={<Success/>}/>
      </Route>
    </Routes>
  )
}
