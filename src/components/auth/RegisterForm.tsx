import { FaEnvelope, FaLock } from 'react-icons/fa6'
import BasicInput from '../ui/input/BasicInput'
import { useState } from 'react'
import BasicButton from '../ui/button/BasicButton'
import Logo from '../logo/Logo'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <form className='px-5 flex-col flex justify-center items-center'>
      <h3 className='text-lg font-bold my-2'>Register an Account</h3>
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
      <BasicInput
        type='password'
        placeholder='Confirm Password'
        icon={<FaLock />}
        value={confirmPassword}
        handleChange={(e) => setConfirmPassword(e.target.value)}
      />
      <BasicButton type='submit' text='Register' />
    </form>
  )
}

export default RegisterForm
