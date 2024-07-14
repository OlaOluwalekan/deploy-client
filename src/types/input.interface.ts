interface GeneralInputInterface {
  type: 'email' | 'password' | 'text'
  name?: string
  placeholder?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface BasicInputProps extends GeneralInputInterface {
  value: string
  icon: JSX.Element
}
