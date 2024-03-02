import React from 'react'

const CartItems = ({ cartItems }: { cartItems: any }) => {
    return (
        <div className="mt-5">
            {cartItems.map((item: any, index: number) => {
                return (
                    <div key={index} className="flex items-center justify-between p-2 border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                            <div>
                                <h3 className="text-sm font-semibold">{item.name}</h3>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">₹{item.price}</p>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CartItems