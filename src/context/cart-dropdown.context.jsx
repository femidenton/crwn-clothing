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
 
const removeCartItem = (cartItems, productToRemove) => {
    //item to remove
    const itemToRemove = cartItems.find(cartItem => cartItem.id === productToRemove.id)

    //if there is only one left, remove from cart
    if (itemToRemove.quantity === 1) {
       return cartItems.filter(cartItem=> cartItem.id !== productToRemove.id)
        
    }


    return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 }: cartItem)
    
    
}


const clearCartItem = (cartItems, productToRemove) => {

    const itemToRemove = cartItems.find(cartItem => cartItem.id === productToRemove.id)

     if (itemToRemove) {
       return cartItems.filter(cartItem=> cartItem.id !== productToRemove.id)
        
    }
}
export const CartDropdownContext = createContext({
    isOpen: false,
    setIsOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    removeCartItem: () => { },
    clearCartItem: () => { },
    cartCount: 0,
    cartTotal: 0
    
})


//the provider ie  the component that allows access to the context data
export const CartDropdownProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    
    useEffect(() => {
        const newCardCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCardCount)

        // console.log(newCardCount)
    }, [cartItems])


    useEffect(() => {
       const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)
        setCartTotal(newCartTotal)

        // console.log(newCardCount)
    }, [cartItems])


    
    //function that triggers when the user clicks 'add to cart' 
    //use this function to setCartItems indirectly instead of using setCartItems directly 
    //receives a product
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        //increase cart count
        setCartCount(prev=> prev + 1)
    }
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
        setCartCount(prev=> prev - 1)
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems(clearCartItem(cartItems, productToRemove))
    }


     const value = { isOpen, setIsOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal}

    return (
        <CartDropdownContext.Provider value={value}> { children } </CartDropdownContext.Provider>
    )
}



