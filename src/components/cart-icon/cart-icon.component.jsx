/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { CartDropdownContext } from "../../context/cart-dropdown.context"


const CartIcon = ( ) => {
    const { setIsOpen , cartCount} = useContext(CartDropdownContext)
    
    const toggleDropdown = () => {
        setIsOpen((prev)=>!prev)
    }
    console.log(cartCount)
    return (
        <div onClick={toggleDropdown} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {cartCount} </span>
        </div>
    )
}


export default CartIcon