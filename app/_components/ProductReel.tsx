"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import ProductItem from "@/components/product-item"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { MdArrowRightAlt } from "react-icons/md";

interface ProductReelProps {
  title: string
  category: string
  carousel: boolean
  textAlign?: "center" | "left" | "right"
}

const ProductReel = ({ title, category, carousel, textAlign = "center" }: ProductReelProps, { ...props }) => {

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
    <div className="flex flex-col items-center justify-center h-full" {...props}>
      {products.length > 0 && (
        <div className="w-full flex flex-col">
          <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight text-${textAlign}`}>
            {title}
          </h4>

          <div className="flex justify-end">
            <Link href={"/category/" + category} className="hover:underline hover:underline-offset-4">
              <div className="flex items-center justify-end gap-2">
                View All
                <MdArrowRightAlt />
              </div>
            </Link>
          </div>

          <div className="h-full">
            {carousel ? <Carousel className="my-2">
              <CarouselContent className="-ml-1">
                {products.map((e, index) => {
                  return (
                    <CarouselItem key={index} className="pl-1 mx-4 basis-1/1 sm:basis-auto md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                      <ProductItem product={products[index]} />
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> : <>
              {/* Grid */}
            </>}

          </div>
        </div>
      )}
    </div>
  )
}

export default ProductReel