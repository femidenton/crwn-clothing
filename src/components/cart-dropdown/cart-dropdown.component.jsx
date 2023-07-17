/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import Button from '../button/button.component'
import {CartDropdownContainer, EmptyMessage, CartItems } from  './cart-dropdown.styles.jsx'
import CartItem from "../cart-item/cart-item.component"




const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext)
    const navigate = useNavigate()
    

    const gotToCheckout = () => {
        navigate('/checkout')
    }

    return (
       
            <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map(item => (
                    <CartItem key={ item.id} cartItem={item} />
                ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
               )}
            </CartItems>
            <Button onClick={gotToCheckout}> GO TO CHECKOUT </Button>
        </CartDropdownContainer>
       
    )
}

export default CartDropdown 