"use client"
import { useEffect, useState } from "react"
import ProductItem from "@/components/product-item"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductReelProps {
  title: string
  category: string
  carousel: boolean
}

const ProductReel = ({ title, category, carousel }: ProductReelProps) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/product/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-category": category,
          },
        })
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])


  return (
    <div className="flex flex-col items-center justify-center h-full">
      {products.length > 0 && (
        <div className="w-full flex flex-col">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
            {title}
          </h4>
          <div className="h-full">
            <Carousel className="my-2 mx-20">
              <CarouselContent className="-ml-1">
                {products.map((e, index) => {
                  return (
                    <CarouselItem key={index} className="pl-1 mx-4 basis-1/6">
                      <ProductItem product={products[index]} />
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Grid */}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductReel