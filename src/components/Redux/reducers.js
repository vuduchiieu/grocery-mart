const initialState = {
    cartItems: [],
    totalPrice: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_CART_ITEM":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
