import React, { createContext, useState, useEffect } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = prev[itemId] - 1;
            if (newCount < 0) return prev; // Ensure item count doesn't go below 0
            return { ...prev, [itemId]: newCount };
        });
    }
    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };
    
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItems+=cartItems[item]
                    }
            }
            return totalItems;
    }

    const contextValue = { getTotalCartItems,getTotalcartAmount,all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
