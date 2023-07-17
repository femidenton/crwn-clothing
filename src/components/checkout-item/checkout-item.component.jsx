/* eslint-disable react/prop-types */
import { useContext } from "react"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
 


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
     const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartDropdownContext)
    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}` } />
            </ImageContainer>
            <BaseSpan>{ name }</BaseSpan>
            <Quantity>
                <Arrow onClick={() => removeItemFromCart(cartItem)}> &#10094; </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemToCart(cartItem)}> &#10095; </Arrow>
            </Quantity>
            <BaseSpan> { price}</BaseSpan>
            <RemoveButton onClick={()=> clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
         </CheckoutItemContainer>
     )
}
 
export default CheckoutItem