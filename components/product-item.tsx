import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


import { CiShoppingCart } from "react-icons/ci";

interface ProductItemProps {
  product: {
    name: string
    price: number
    categorySlug: string
    image: string
  }
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg max-w-md mx-auto border-2 hover:bg-slate-50 hover:cursor-pointer">
      <div className="flex-shrink-0 overflow-hidden rounded-tr-lg rounded-tl-lg aspect-[16/9] min-h-[192px]">
        <img className="h-48 w-full object-cover rounded-tr-lg rounded-tl-lg transform transition-transform duration-500 hover:scale-110" src={product.image} alt={product.name} />
      </div>
      <div className="flex justify-between">
        <div className="px-6 py-4 space-y-3">
          <h2 className="text-xl font-semibold w-max text-gray-900">{product.name}</h2>
          <p className="font-medium text-gray-900">₹{product.price}</p>
        </div>
        <div className="px-6 py-3 rounded-b-lg flex items-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button aria-label="Add to Cart" variant={"ghost"} size={"icon"} className="pr-0 mr-0">
                  <CiShoppingCart size={25} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" style={{ backgroundColor: "gray" }}>
                <p>Add to Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export default ProductItem