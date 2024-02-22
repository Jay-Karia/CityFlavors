import React from 'react'

type Props = {
    children: React.ReactNode
}

const DummyLayout = ({children} : Props) => {
  return (
    <div className="flex justify-center h-full flex-col">
        {children}
    </div>
  )
}

export default DummyLayout