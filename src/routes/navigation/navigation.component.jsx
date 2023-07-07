import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import "./navigation.styles.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartDropdownContext } from "../../context/cart-dropdown.context"

 

const Navigation = () => {
  const { currentUser } = useContext(UserContext) //re-renders when there is a change in the UserContext
  const {isOpen} = useContext(CartDropdownContext)


 
  console.log(isOpen)
 
  return (
    <>
       <div className="navigation">  
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo"/>
            </Link>      
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'> SHOP</Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}> SIGN OUT</span>) :
            (<Link className="nav-link" to='/auth'> SIGN IN</Link>)
          
          }
          <CartIcon/>
                
        </div>
       {isOpen &&  <CartDropdown />}
       </div>
      <Outlet/> {/** where the child compnents will be rendered , in this case the home page and other pages */}
    </> 
    
  )
}

export default Navigation