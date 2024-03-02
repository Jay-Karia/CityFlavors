type Cart = {
    id: string;
    userId: string;
    productId: string[];
    quantity: number[];
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}[];

const calcCartAmount = async (cart: Cart, amount : number, quantity : number) => {
    let finalAmount = 0;
    if (cart.length > 0) {
        const cartAmount = cart[0].amount;
        finalAmount = cartAmount + (amount * quantity);
    } else {
        finalAmount = amount * quantity;
    }

    return finalAmount;
};

export default calcCartAmount;