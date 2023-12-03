export const updateCartItem = (product) => ({
    type: "UPDATE_CART_ITEM",
    payload: product,
});

export const removeCartItem = (productId) => ({
    type: "REMOVE_CART_ITEM",
    payload: productId,
});

export const setTotalPrice = (price) => ({
    type: "SET_TOTAL_PRICE",
    payload: price,
});
