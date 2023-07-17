import { useContext } from "react"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';



const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartDropdownContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            
            
                {cartItems.map((cartItem) => {

                    const {id} = cartItem
                    return (
                          <CheckoutItem cartItem={cartItem} key={id}/>
                    // <div key={id}>
                    //     <h2>{name}</h2>
                    //     <span>{quantity }</span>
                    //     <span onClick={()=>addItemToCart(cartItem)}>increment</span>
                    //     <br />
                    //     <span onClick={()=> removeItemFromCart(cartItem)}>decrement</span>
                    // </div>
                      )  
                 })}
            <Total>Total: ${ cartTotal }</Total>
        </CheckoutContainer>
    )
}

export default Checkout