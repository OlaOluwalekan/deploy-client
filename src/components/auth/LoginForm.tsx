import { useState } from 'react'
import Logo from '../logo/Logo'
import BasicInput from '../ui/input/BasicInput'
import { FaEnvelope, FaLock } from 'react-icons/fa6'
import BasicButton from '../ui/button/BasicButton'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='px-5 flex-col flex justify-center items-center'>
      <h3 className='text-lg font-bold my-2'>Welcome Back</h3>
      <Logo />
      <BasicInput
        type='email'
        placeholder='Email'
        icon={<FaEnvelope />}
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <BasicInput
        type='password'
        placeholder='Password'
        icon={<FaLock />}
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <div className='form-control'>
        <label className='label cursor-pointer'>
          <input
            type='checkbox'
            defaultChecked
            className='checkbox checkbox-primary checkbox-sm mr-2'
          />
          <span className='label-text'>Remember me</span>
        </label>
      </div>
      <BasicButton type='submit' text='Login' />
      <Link to='/auth/forgot-password' className='text-sm underline'>
        Forgot Password
      </Link>
    </form>
  )
}

export default LoginForm
