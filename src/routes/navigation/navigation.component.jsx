import { Link, Outlet } from "react-router-dom"
import "./navigation.styles.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

const Navigation = () => {
  return (
    <>
       <div className="navigation"> 
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo"/>
            </Link>      
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'> SHOP</Link>
                <Link className="nav-link" to='/signIn'> SIGNIN</Link>
            </div>
       </div>
      <Outlet/> {/** where the child compnents will be rendered , in this case the home page and other pages */}
    </> 
    
  )
}

export default Navigation