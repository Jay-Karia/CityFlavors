"use client"

import { useEffect, useState } from 'react'
import LoadingComponent from '@/components/loading-component'
import Link from 'next/link'
import { badgeVariants } from '@/components/ui/badge'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  categorySlug: string
  quantity?: number
}

type Props = {
  params: {
    id: string;
  };
};

const ItemPage = ({ params }: Props) => {

  const [product, setProduct] = useState({} as Product);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // fetch product
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/product/${params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await response.json()
        setProduct(data.product)
      } catch (error) {
        console.error("Error fetching product", error);
      }
      setLoading(false)
    }

    fetchProduct();

  }, [])

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
    <div className="h-full flex flex-col lg:items-center lg:ml-0 items-start p-2 mb-10">
      {loading ? <LoadingComponent /> :
        product ? (
          <div className="h-max mb-10 lg:w-3/4 w-full lg:my-10 my-0 lg:py-10 py-0 flex gap-10 lg:flex-nowrap flex-wrap lg:justify-center justify-start">
            <div className="sm:w-2/5 w-full flex flex-col gap-14">
              <div className="pt-10 flex flex-col gap-3">
                <div className="my-2">
                  {/* Breadcrumbs */}

                </div>
                <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight w-max">
                  {product.name}
                </h3>
                <div className="w-max flex space-x-5">
                  <h4 className="scroll-m-20 text-lg font-medium tracking-tight">
                    ₹{product.price}
                  </h4>
                  <Separator orientation="vertical" />
                  <Link href={`/category/${product.categorySlug}`} className={badgeVariants({ variant: "outline" })}>{product.categorySlug}</Link>
                </div>
                <p className="leading-7 w-max">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="default" className="w-full" onClick={()=>{handleAddToCart(product)}}>
                  Add to Cart
                </Button>
                <p className="leading-7 [&:not(:first-child)]:mt-6 w-max">
                  7 Day return guarantee
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10 justify-end max-h-[500px] overflow-hidden max-w-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-md"

              />
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )
      }
    </div>
  )
}

export default ItemPage