interface GeneralBtnProps {
  type?: 'submit' | 'button' | 'reset'
  handleClick?: () => void
  text?: string
}

export interface OAuthBtnProps extends GeneralBtnProps {
  icon: JSX.Element
}

export interface BasicBtnProps extends GeneralBtnProps {
  text: string
}
