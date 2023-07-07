/* eslint-disable react/prop-types */
import { useContext } from "react"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component"



const CartDropdown = () => {
    const {  cartItems } = useContext(CartDropdownContext)
    

    return (
       
            <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={ item.id} cartItem={item} />
               ))}
            </div>
            <Button> GO TO CHECKOUT </Button>
        </div>
       
    )
}

export default CartDropdown 