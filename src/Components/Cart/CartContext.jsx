import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const[cart,setCart] = useState([]);

    // Loading existing data from local storage - runs only once when the site loads
    useEffect( () => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if(savedCart) setCart(savedCart);
    }, [])

    // Whenever cart updates, this saves it to local storage
    useEffect( () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    // Adding items
    const addToCart = (product) => {
        setCart( (prev) => {
            const existing = prev.find( (item) => item.id === product.id) 

            // If product exists already the it increases it's quantity by 1 
            if (existing){
                return prev.map( (item) => 
                    item.id === product.id ? {...item, quantity : item.quantity + 1 } : item
                );
            }

            // If not it keeps the previous items annd then adds the new product with the quantity 1
            return [...prev, {...product, quantity : 1}]
        })
    }

    // Removing items from the cart
    const removeFromCart = (id) => {
        // This only keeps the items whose id is not equal to the id we're removing
        setCart ( (prev) => prev.filter( (item) => item.id !== id  ))
    }


    return (
        <CartContext.Provider value={ {cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

}


export const useCart = () => useContext(CartContext)