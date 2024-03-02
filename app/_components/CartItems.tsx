"use client"

import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

const CartItems = ({ cartItems, cartId }: { cartItems: any, cartId: string }) => {

    const router = useRouter()

    const handleRemove = async (id: string) => {
        try {
            const response = await fetch('/api/cart/remove', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartId: cartId,
                    productId: id
                })
            })
            const data = await response.json()
            router.refresh();
        } catch (error) {
            console.error(error)
        }
    }

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
                                <div className="flex items-center space-x-2 mt-2">
                                    {/* <button className="text-gray-500 bg-gray-100 px-2 py-1 rounded-md">-</button> */}
                                    <p className="text-sm font-semibold">{item.quantity}</p>
                                    {/* <button className="text-gray-500 bg-gray-100 px-2 py-1 rounded-md">+</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">₹{item.price}</p>
                            <button className="text-gray-500 bg-gray-100 px-2 py-1 rounded-md" onClick={() => { handleRemove(item.id) }}>
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default CartItems