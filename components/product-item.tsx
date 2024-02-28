interface ProductItemProps {
    product : {
        name: string
        description: string
        price: number
        categoryId: string
        category: string
        createdAt: Date
        updatedAt: Date
    }
}

const ProductItem = ({product} : ProductItemProps) => {
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductItem