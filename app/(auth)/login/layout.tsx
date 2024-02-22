import React from 'react'

type Props = {
  children: React.ReactNode
}

const LoginLayout = ({ children }: Props) => {
  return (
    <div className="pt-5 h-full">
      {children}
    </div>
  )
}

export default LoginLayout