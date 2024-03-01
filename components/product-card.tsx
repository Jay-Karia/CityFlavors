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

const ProductCard = ({ product, index }: { product: Product, index: number }) => {
    return (
      <div
        key={index}
        className="flex flex-row items-center justify-between border-b border-gray-300 pt-4 pb-4 hover:bg-slate-100 rounded-lg p-2"
      >
        <div className="flex flex-row items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <Link href={`/item/${product.id}`}>
              <p className="text-lg font-semibold hover:underline hover:underline-offset-4">{product.name}</p>
            </Link>
            <div className="flex space-x-2 items-center">
              <p className="text-sm">{product.description}</p>
              <Link href={`/category/${product.categorySlug}`} className={badgeVariants({ variant: "outline" })}>{product.categorySlug}</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <p className="text-lg font-semibold">₹{product.price}</p>
          <Button aria-label="Add to Cart" variant={"outline"} size={"icon"} className="pr-0 mr-0">
            <CiShoppingCart size={25} />
          </Button>
        </div>
      </div>
    )
  }

export default ProductCard