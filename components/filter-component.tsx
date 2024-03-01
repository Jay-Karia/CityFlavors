import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    categorySlug: string;
}

interface FilterProps {
    data: Product[];
    updateProducts: (data: Product[]) => void;
}

const Filter: React.FC<FilterProps> = ({ data, updateProducts }) => {
    const [price, setPrice] = useState<number | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    const uniqueCategories = Array.from(new Set(data.map((item) => item.categorySlug)));
    const uniquePrices = Array.from(new Set(data.map((item) => item.price))).sort((a, b) => a - b);

    const filteredData = data.filter((item) => {
        return (price ? item.price <= price : true) && (category ? item.categorySlug === category : true);
    });


    return (
        <div className="p-4 pt-0 w-max">
            <div className="flex space-x-4 items-center">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <Select onValueChange={(e) => { setPrice(Number(e)); updateProducts(filteredData); }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={" "} defaultValue={""}>All</SelectItem>
                            {uniquePrices.map((item, index) => (
                                <SelectItem key={index} value={item + ""}>{item}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    {/* @ts-ignore */}
                    <Select onValueChange={(e) => { setCategory(e || null); updateProducts(filteredData); }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {/* @ts-ignore */}
                            <SelectItem value={null} defaultValue={""}>All</SelectItem>
                            {uniqueCategories.map((category, index) => (
                                <SelectItem key={index} value={category}>{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default Filter;