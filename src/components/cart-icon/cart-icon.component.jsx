/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartDropdownContext } from "../../context/cart-dropdown.context"


const CartIcon = ( ) => {
    const { setIsOpen , cartCount} = useContext(CartDropdownContext)
    
    const toggleDropdown = () => {
        setIsOpen((prev)=>!prev)
    }
    console.log(cartCount)
    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}


export default CartIcon