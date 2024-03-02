import React from 'react'

const CartLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className="h-full flex flex-col">
        {children}
    </div>
  )
}

export default CartLayout