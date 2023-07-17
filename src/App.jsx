import Home from "./routes/home/home.component"
import { Route, Routes } from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop  from "./routes/shop/shop-component"
import Checkout from "./routes/checkout/checkout.component"


 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> {/**Top level component that will always be present */}
        <Route index element={<Home/>} />
        <Route path="shop/*" element={<Shop/>} /> {/**Nested routes. further routes in shop compnent using dynamic url parameters   */}
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>   
  )
}

export default App
