import db from "@/lib/db";

const checkSlugValidity = async (slug: string) => {
    let isValid = false

    // check if the slug is not used
    let existingSlug = await db.category.findFirst({
        where: {
            slug: slug
        }
    });
    if (!existingSlug)
        isValid = true;


    return isValid;
}

export default checkSlugValidity;