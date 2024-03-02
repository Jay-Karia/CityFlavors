import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Button } from './ui/button'
import { CiShoppingCart } from 'react-icons/ci'

type Product = {
    id: string
    name: string
    price: number
    categorySlug: string
    image: string
    description: string
    quantity?: number
}

const AddToCartButton = ({ tooltip, product }: { tooltip: boolean, product: Product }) => {

    // get user from session in next auth
    const user = "65dfef091cd06042c2d3bc44";

    const handleAddToCart = async (product: Product) => {
        product.quantity = 1
        try {
            const response = await fetch('/api/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    productId: product.id,
                    quantity: product.quantity,
                    amount: product.price,
                    name: product.name,
                    image: product.image,
                    description: product.description
                })
            })
            const data = await response.json()
            console.log(data)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        tooltip ?
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button aria-label="Add to Cart" variant={"ghost"} size={"icon"} className="pr-0 mr-0" onClick={() => { handleAddToCart(product) }}>
                            <CiShoppingCart size={25} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" style={{ backgroundColor: "gray" }}>
                        <p>Add to Cart</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> :
            <Button aria-label="Add to Cart" variant={"ghost"} size={"icon"} className="pr-0 mr-0" onClick={() => { handleAddToCart(product) }}>
                <CiShoppingCart size={25} />
            </Button>
    )
}

export default AddToCartButton