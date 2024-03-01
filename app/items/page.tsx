"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/product-card"
import Search from "@/components/search-component"
import Filter from "@/components/filter-component"

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  categorySlug: string
}

const ItemsPage = () => {

  const [products, setProducts] = useState([] as Product[])
  const [message, setMessage] = useState("Loading products..." as string | null)

  const updateProducts = (data: Product[]) => {
    setProducts(data)
  }

  const sanitizeData = (data: any) => {
    return data.products.map((product: any) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        categorySlug: product.categorySlug,
      }
    })
  }

  useEffect(() => {
    // fetch products
    const fetchProducts = async () => {
      try {
        setMessage("Loading products...")
        const response = await fetch(`/api/product/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await response.json()
        const sanitizedProducts = sanitizeData(data);

        setProducts(sanitizedProducts)
        setMessage(null)
      } catch (error) {
        console.error("Error fetching products", error);
        setMessage("Error fetching products")
      }
    }

    fetchProducts();

  }, [])


  return (
    <div className="h-max flex flex-col p-6 w-full">
      <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight w-full">
        All Items
      </h3>

      <div className="flex space-x-5 items-center my-4 w-max">
        <Search data={products} updateProducts={updateProducts} />
        <Filter data={products} updateProducts={updateProducts} />
      </div>

      <div className="flex flex-col">
        {products.length > 0 ? (
          <div>
            {products.map((product, index) => {
              return (
                <ProductCard key={index} product={product} index={index} />
              )
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemsPage