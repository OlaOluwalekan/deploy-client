import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { toggleNav } from '../../features/generalSlice'
import Logo from '../logo/Logo'
import { navData } from '../../data/nav-data'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  const { navIsOpen } = useSelector((store: RootState) => store.general)
  const dispatch = useDispatch()

  return (
    <div
      className={clsx(
        'fixed top-0 w-screen h-full z-10 transition-all bg-[#00000079]',
        navIsOpen ? 'left-0' : 'left-[-5000px]'
      )}
    >
      <div className='w-[300px] h-full bg-blue-900'>
        <article className='flex justify-between items-center px-3 bg-base-100'>
          <Logo />
          <button
            className='text-2xl text-red-600'
            onClick={() => dispatch(toggleNav(false))}
          >
            <FaTimes />
          </button>
        </article>
        <section>
          {navData.map((item) => {
            return (
              <Link
                to={item.path}
                key={item.id}
                className='flex text-base-100 font-bold leading-10 px-3'
              >
                {item.title}
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default MobileNav
