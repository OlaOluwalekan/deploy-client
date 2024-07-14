import { BasicInputProps } from '../../../types/input.interface'

const BasicInput = ({
  icon,
  type,
  placeholder,
  value,
  handleChange,
}: BasicInputProps) => {
  return (
    <label className='input input-bordered flex items-center gap-2 rounded-full my-2 bg-sky-500 border-white text-white'>
      <span>{icon}</span>
      <input
        type={type}
        className='grow text-white placeholder:text-base-300'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default BasicInput
