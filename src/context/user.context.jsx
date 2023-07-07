/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {  createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

//the storage spot of the actual value to be accessed. pass in default values  initially
export const UserContext = createContext({
    //based empty state on the context, 
    currentUser: null,
    setCurrentUser: () => null
})

 //the provider ie  the component that allows access to the context data
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    
    useEffect(() => {
        //checks the auth state when the component mounts
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        } 
        console.log(user)
         setCurrentUser(user)
    })

    //function to stop listening for the auth state when the component unmounts
    return unsubscribe
    }, [])
    

    return (
        <UserContext.Provider value={value}> { children } </UserContext.Provider>
    )
}



