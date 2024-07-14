import { Outlet } from 'react-router-dom'
import AuthCard from '../components/auth/AuthCard'

const AuthLayout = () => {
  return (
    <div>
      <AuthCard>
        <Outlet />
      </AuthCard>
    </div>
  )
}

export default AuthLayout
