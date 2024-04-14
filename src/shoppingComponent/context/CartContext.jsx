import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const add = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    }

    const remove = (item) => {
        setCartItems(prevCartItems => prevCartItems.filter((e) => e.name !== item.name));

        const updatedCartItems = cartItems.filter((e) => e.name !== item.name);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    const removeAll = () => {
        localStorage.clear();
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, add, remove , removeAll }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
