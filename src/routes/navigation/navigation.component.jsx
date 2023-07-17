import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from "./navigation.styles.jsx"
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
       <NavigationContainer>  
            <LogoContainer to='/'>
                <CrownLogo className="logo"/>
            </LogoContainer>      
            <NavLinksContainer >
                <NavLink to='/shop'> SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>) :
            (<NavLink to='/auth'> SIGN IN</NavLink>)
          
          }
          <CartIcon/>
                
        </NavLinksContainer>
       {isOpen &&  <CartDropdown />}
       </NavigationContainer>
      <Outlet/> {/** where the child compnents will be rendered , in this case the home page and other pages */}
    </> 
    
  )
}

export default Navigation