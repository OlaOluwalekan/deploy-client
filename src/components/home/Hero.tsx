import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col md:flex-row-reverse max-w-[1100px] m-auto'>
        <div className='mask mask-heart w-[200px] aspect-square flex justify-center items-center bg-blue-300 md:w-[500px] lg:w-[600px]'>
          <img
            className='w-full'
            src='https://img.icons8.com/?size=100&id=113801&format=png&color=000000'
            alt='upload'
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold'>
            At the Heart of Your Liveliness
          </h1>
          <p className='py-6 max-w-[500px]'>
            Simplify your web development workflow with Deploya. Instantly
            deploy your sites, manage domains, and automate tasks with our
            powerful, user-friendly platform. Get your projects online faster
            and more efficiently than ever before.
          </p>
          <Link to='/auth/register' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
