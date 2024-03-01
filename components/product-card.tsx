import { CiShoppingCart } from "react-icons/ci"
import { Button } from "./ui/button"
import Link from "next/link"
import { badgeVariants } from "./ui/badge"

interface Product {
    id: string
    name: string
    price: number
    description: string
    image: string
    categorySlug: string
}

const ProductCard = ({ product, index }: { product: Product, index: number }, {...props }) => {
    return (
        <div
            key={index}
            className="flex flex-row items-center justify-between border-b border-gray-300 pt-4 pb-4"
        >
            <div className="flex flex-row items-center space-x-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md"
                />
                <div>
                    <p className="text-lg font-semibold">{product.name}</p>
                    <div className="flex space-x-2 items-center">
                        <p className="text-sm">{product.description}</p>
                        <Link href={`/category/${product.categorySlug}`} className={badgeVariants({ variant: "outline" })}>{product.categorySlug}</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <p className="text-lg font-semibold">₹{product.price}</p>

                <Button aria-label="Add to Cart" variant={"ghost"} size={"icon"} className="pr-0 mr-0">
                    <CiShoppingCart size={25} />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard