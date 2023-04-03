import { Outlet} from 'react-router-dom'
import { Header } from './components/Header'

export const DefaultLayout = () => {
  return (
    <div className='h-full w-full bg-yellow'>
        hi
        <Header/>
        <Outlet/>
    </div>
  )
}
