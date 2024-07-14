import { Link } from 'react-router-dom'
import { navData } from '../../data/nav-data'

const DesktopNav = () => {
  return (
    <div className='hidden md:flex gap-5'>
      {navData.map((item) => {
        return (
          <Link
            key={item.id}
            to={item.path}
            className='font-bold text-blue-900'
          >
            {item.title}
          </Link>
        )
      })}
    </div>
  )
}

export default DesktopNav
