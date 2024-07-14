import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import OAuthButton from '../ui/button/OAuthButton'
import { FaGithub, FaGoogle } from 'react-icons/fa6'
import clsx from 'clsx'

const AuthCard = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  //   console.log(location.pathname)

  return (
    <div className='w-screen bg-base-200 h-[calc(100vh-100px)] py-5 md:flex justify-center items-center'>
      <div className='md:w-[570px] md:h-[calc(100vh-200px)] relative'>
        <div className='card bg-white w-[90%] mx-auto drop-shadow-2xl md:w-[300px] md:absolute'>
          <div className='card-body grid grid-cols-[4fr,1fr,2fr] md:flex md:flex-col'>
            <section className='flex justify-between items-center md:flex-col md:gap-2'>
              <div className='border-2 border-primary rounded-full'>
                <img
                  className='w-[100px] rotate-[-45deg] md:w-[150px] md:rotate-0'
                  src='https://img.icons8.com/?size=100&id=B0YxODenuYvG&format=png&color=000000'
                  alt='Rocket'
                />
              </div>
              <article className='w-[50%] flex flex-col gap-2 md:w-full'>
                <Link
                  to='/auth/register'
                  className={clsx(
                    'flex justify-center items-center rounded-full py-2 w-full',
                    location.pathname === '/auth/register'
                      ? 'text-gray-600 disabled'
                      : 'bg-primary text-base-100'
                  )}
                >
                  Register
                </Link>
                <Link
                  to='/auth/login'
                  className={clsx(
                    'flex justify-center items-center rounded-full py-2 w-full',
                    location.pathname === '/auth/login'
                      ? 'text-gray-600 disabled'
                      : 'bg-primary text-base-100'
                  )}
                >
                  Login
                </Link>
              </article>
            </section>
            <div className='divider divider-primary divider-horizontal md:hidden'>
              Or
            </div>
            <div className='divider divider-primary hidden md:flex'>
              Or Login with
            </div>
            <section className='flex flex-col justify-center w-full gap-2 md:flex-row'>
              <OAuthButton icon={<FaGoogle />} />
              <OAuthButton icon={<FaGithub />} />
            </section>
          </div>
        </div>
        <div className='card w-[90%] max-w-[400px] bg-sky-500 drop-shadow-2xl py-3 mx-auto my-[-20px] md:absolute md:bottom-0 md:right-0 md:w-[300px] md:m-0'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthCard
