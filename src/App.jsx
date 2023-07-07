import Home from "./routes/home/home.component"
import { Route, Routes } from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component"
import Authentication from "./routes/authentication/authentication.component"
import Shop  from "./components/shop/shop-component"


 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> {/**Top level component that will always be present */}
        <Route index element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/auth" element={<Authentication/>} />
      </Route>
    </Routes>   
  )
}

export default App
