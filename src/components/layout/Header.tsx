import { FaBars } from 'react-icons/fa6'
import Logo from '../logo/Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleNav } from '../../features/generalSlice'
import clsx from 'clsx'
import { RootState } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { navIsOpen } = useSelector((store: RootState) => store.general)

  return (
    <header className='w-full'>
      <div className='flex w-10/12 m-auto justify-between items-center py-3'>
        <Logo />
        <nav>
          <DesktopNav />
          <button
            className={clsx(
              'text-2xl text-blue-900 md:hidden',
              navIsOpen ? 'hidden' : ''
            )}
            onClick={() => dispatch(toggleNav(true))}
          >
            <FaBars />
          </button>
          <MobileNav />
        </nav>
      </div>
    </header>
  )
}

export default Header
