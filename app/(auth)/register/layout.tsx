import React from 'react'

type Props = {
  children: React.ReactNode
}

const RegisterLayout = ({children} : Props) => {
  return (
    <div className="pt-5 h-full">
      {children}
    </div>
  )
}

export default RegisterLayout