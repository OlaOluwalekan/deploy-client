import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default GeneralLayout
