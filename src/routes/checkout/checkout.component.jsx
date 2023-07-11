import { useContext } from "react"
import "./checkout.styles.scss"
import { CartDropdownContext } from "../../context/cart-dropdown.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"



const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartDropdownContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
            
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
            <span className="total">Total: ${ cartTotal }</span>
        </div>
    )
}

export default Checkout