"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import LoadingComponent from "@/components/loading-component"
import CartItems from "../_components/CartItems"

type CartType = {
    id: string
    userId: string
    productId: string[]
    quantity: number[]
    amount: number
}

const CartPage = () => {

    const [cart, setCart] = useState(null as CartType | null)
    // TODO: Fetch cart items
    const [cartItems, setCartItems] = useState([
        {
            id: "1",
            name: "Product 1",
            price: 100,
            description: "Product 1 description",
            image: "https://via.placeholder.com/150",
            categorySlug: "category-1"
        },
        {
            id: "2",
            name: "Product 2",
            price: 200,
            description: "Product 2 description",
            image: "https://via.placeholder.com/150",
            categorySlug: "category-2"
        },
        {
            id: "3",
            name: "Product 3",
            price: 300,
            description: "Product 3 description",
            image: "https://via.placeholder.com/150",
            categorySlug: "category-3"
        },
        {
            id: "4",
            name: "Product 4",
            price: 400,
            description: "Product 4 description",
            image: "https://via.placeholder.com/150",
            categorySlug: "category-4"
        }
    ])
    const [loading, setLoading] = useState(true)

    const user = "65dfef091cd06042c2d3bc41";
    const { toast } = useToast()

    useEffect(() => {
        // Fetch cart
        async function fetchCart() {
            try {
                setLoading(true)
                const response = await fetch('/api/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: user
                    })

                })
                const data = await response.json()

                setCart(data.data[0])
                toast({
                    description: "Cart items loaded successfully",
                    variant: "success"
                })
            } catch (error) {
                console.error(error)
                toast({
                    description: "Could not load cart items!",
                    variant: "destructive"
                })
            } finally {
                setLoading(false)
            }
        }
        fetchCart();

    }, [])

    return (
        <div className="h-full flex flex-col items-center justify-center">
            {loading ? <LoadingComponent /> :
                cart ?
                    <div className="h-full mb-10 md:w-3/4 w-full my-10 py-10 flex gap-10 lg:flex-nowrap flex-wrap justify-center">
                        <div className="lg:w-3/5 w-full mx-5">
                            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                                Cart
                            </h3>
                            <CartItems cartItems={cartItems} />
                        </div>
                        <div className="lg:w-2/5 w-full mx-5 flex flex-col p-5 rounded-lg bg-slate-100 h-max mt-14">
                            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                                Checkout
                            </h3>
                            <div className="flex flex-col gap-5 mt-5">
                                <div className="flex justify-between">
                                    <p>Subtotal</p>
                                    <p>${cart.amount}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Total</p>
                                    <p>${cart.amount}</p>
                                </div>
                                <button className="bg-primary text-white py-3 rounded-md">Checkout</button>
                            </div>
                        </div>
                    </div>
                    : <p>No items in cart</p>
            }
        </div>
    )
}

export default CartPage