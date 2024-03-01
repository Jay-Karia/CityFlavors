"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import ProductCard from "./product-card"

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  categorySlug: string
}

interface SearchProps {
  data: Product[];
  updateProducts: (data: Product[]) => void;
}

const Search: React.FC<SearchProps> = ({ data, updateProducts }) => {
  const [searchedProducts, setSearchedProducts] = useState([] as Product[])

  const handleSearch = (searchQuery: string) => {
    const filteredProducts = data.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    setSearchedProducts(filteredProducts)
    updateProducts(searchedProducts);
  }


  return (
    <div className="flex flex-row justify-between items-center mt-4 my-4 h-full w-max">
      <Input type="text" placeholder="Search" className="max-w-[25rem] w-[25rem]" onChange={(e)=>{handleSearch(e.target.value)}} />
    </div>
  )
}

export default Search