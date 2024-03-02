import db from "@/lib/db";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categorySlug: string;
}

const updateProductsId = async (product: Product, isDelete: boolean = false) => {

    // category of the new added product
    const Category = await db.category.findFirst({
        where: {
            slug: product.categorySlug,
        }
    })

    // existing products in the category
    const categoryProducts = Category?.productsId;

    // id of the new product
    const productId = product.id;

    // add the new product id to the existing products in the category
    if (categoryProducts) {
        if (!isDelete) {
            categoryProducts.push(productId);
        } else {
            // remove the product id from the existing products in the category
            const index = categoryProducts?.indexOf(productId);
            if (index !== -1) {
                categoryProducts?.splice(index, 1);
            }
        }
    }

    // update the productsId array in the category
    if (Category) {
        await db.category.update({
            where: {
                id: Category.id,
            },
            data: {
                productsId: categoryProducts,
            },
        });
    }
}

export default updateProductsId;