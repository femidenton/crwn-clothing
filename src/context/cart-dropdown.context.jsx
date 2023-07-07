/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState } from "react";

//helper function to check inside the cartItems array to see if a cart item exists or not and make the update accordingly
const addCartItem = (cartItems, productToAdd) => {
    
    // find if cartItems contains productToAdd
     const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    
  
    //if found, increment quantity
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity+ 1 }: cartItem)
    } 

    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity:1}]
}
 

export const CartDropdownContext = createContext({
    isOpen: false,
    setIsOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    
})


//the provider ie  the component that allows access to the context data
export const CartDropdownProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [cartCount, setCartCount] = useState(0)
    
    useEffect(() => {
        const newCardCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCardCount)
        console.log(newCardCount)
    }, [cartItems])
    
    //function that triggers when the user clicks 'add to cart' 
    //use this function to setCartItems indirectly instead of using setCartItems directly 
    //receives a product
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        setCartCount(prev=> prev + 1)
     }


     const value = { isOpen, setIsOpen, cartItems, addItemToCart, cartCount}

    return (
        <CartDropdownContext.Provider value={value}> { children } </CartDropdownContext.Provider>
    )
}



