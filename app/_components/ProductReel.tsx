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

  const [products, setProducts] = useState([])

  useEffect(() => {
    // fetch product from database

  }, [products])


  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
        {title}
      </h4>
      {/* Carousel */}
      {products.length > 0 && (
        <div>
          <Carousel className="w-full max-w-sm my-10">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <ProductItem product={products[index]} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Grid */}
        </div>
      )}
    </div>
  )
}

export default ProductReel