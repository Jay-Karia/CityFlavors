import React from 'react'

type Props = {
    children: React.ReactNode
}

const DummyLayout = ({children} : Props) => {
  return (
    <div className="flex justify-center">
        {children}
    </div>
  )
}

export default DummyLayout