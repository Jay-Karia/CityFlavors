import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface ProductItemProps {
  product: {
    name: string
    description: string
    price: number
    categorySlug: string
    image: string
  }
}

const ProductItem = ({ product }: ProductItemProps) => {
  // TODO: Design this component
  return (
    <div className="w-full mt-5">
      <Card className="w-full">
        <img src={product.image} alt={product.name} style={{height: "100%", width: "100%", aspectRatio: 1.5, borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}/>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>₹{product.price}</p>
        </CardContent>
        <CardFooter>
          <p>Add to Cart</p>
        </CardFooter>
      </Card>

    </div>
  )
}

export default ProductItem