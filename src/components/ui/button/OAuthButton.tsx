import { OAuthBtnProps } from '../../../types/button.interface'

const OAuthButton = ({ icon }: OAuthBtnProps) => {
  return (
    <button className='flex justify-center items-center text-2xl w-full py-3 border-2 border-base-300 rounded'>
      {icon}
    </button>
  )
}

export default OAuthButton
