/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component"




const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext)
    const navigate = useNavigate()
    

    const gotToCheckout = () => {
        navigate('/checkout')
    }

    return (
       
            <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={ item.id} cartItem={item} />
               ))}
            </div>
            <Button onClick={gotToCheckout}> GO TO CHECKOUT </Button>
        </div>
       
    )
}

export default CartDropdown 