/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json'

export const ProductsContext = createContext({
    //based empty state on the context, 
    products: []
})


//the provider ie  the component that allows access to the context data
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA)
    const value = { products, setProducts}
    

    return (
        <ProductsContext.Provider value={value}> { children } </ProductsContext.Provider>
    )
}



