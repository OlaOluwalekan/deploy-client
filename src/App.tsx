import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import GeneralLayout from './pages/GeneralLayout'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { toggleNav } from './features/generalSlice'
import AuthLayout from './pages/AuthLayout'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  const dispatch = useDispatch()

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dispatch(toggleNav(false))
    }
  })

  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralLayout />}>
            <Route index element={<Home />} />
            <Route path='/auth' element={<AuthLayout />}>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
