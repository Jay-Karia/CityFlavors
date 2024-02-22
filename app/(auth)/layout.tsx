import React from 'react'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({children} : Props) => {
  return (
    <div className="flex flex-col pt-10 ">
      <div className='flex justify-center'>
        <Image src="/building.png" alt="logo" width={40} height={50}/>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout