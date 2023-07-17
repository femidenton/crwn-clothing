/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.js'
import { addNewCollectionAndDocument, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    //based empty state on the context, 
    categoriesMap: {}
})


//the provider ie  the component that allows access to the context data
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async() => {
            const getCategoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(getCategoryMap)
        }
        getCategoriesMap()
    }, []) //executed once when the page loads
   

    const value = { categoriesMap, setCategoriesMap}
    

    return (
        <CategoriesContext.Provider value={value}> { children } </CategoriesContext.Provider>
    )
}



