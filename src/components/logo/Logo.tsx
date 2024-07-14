import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <img className='w-24' src='/logo.webp' alt='Logo' />
    </Link>
  )
}

export default Logo
