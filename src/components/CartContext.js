import React, { createContext, useReducer, useContext, useEffect } from 'react';

const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.itemId
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item
                ),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.itemId),
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            };
        default:
            return state;
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: [],
        totalPrice: 0,
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        const total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        dispatch({ type: 'SET_TOTAL_PRICE', payload: total });
    }, [state.cartItems]);

    const contextValue = {
        cartItems: state.cartItems,
        totalPrice: state.totalPrice,
        addToCart: (product) => dispatch({ type: ADD_TO_CART, payload: product }),
        updateQuantity: (itemId, newQuantity) =>
            dispatch({ type: UPDATE_QUANTITY, payload: { itemId, newQuantity } }),
        removeItem: (itemId) => dispatch({ type: REMOVE_ITEM, payload: { itemId } }),
        clearCart: () => dispatch({ type: CLEAR_CART }),
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
