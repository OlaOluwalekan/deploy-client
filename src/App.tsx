import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import GeneralLayout from './pages/GeneralLayout'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { toggleNav } from './features/generalSlice'

const App = () => {
  const dispatch = useDispatch()

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dispatch(toggleNav(false))
    }
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
