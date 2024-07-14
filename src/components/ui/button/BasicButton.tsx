import { BasicBtnProps } from '../../../types/button.interface'

const BasicButton = ({ type, text }: BasicBtnProps) => {
  return (
    <button type={type} className='btn w-full rounded-full my-5'>
      {text}
    </button>
  )
}

export default BasicButton
