import { Outlet} from 'react-router-dom'
import { Header } from './components/Header'

export const DefaultLayout = () => {
  return (
    <div className='h-full w-full bg-yellow'>
      Default Layout
        <Header/>
        <Outlet/>
    </div>
  )
}
