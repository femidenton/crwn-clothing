// import { useEffect } from "react"
// import {getRedirectResult} from 'firebase/auth'
import { createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"



const SignIn = () => { 

    // useEffect(async () => {
    //     //retrieve the response from the redirect since it doesnt log anything when clicked
    //     //auth helps keep trakc of the authentication state thru out the app
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user) 
    //     }
    // }, [])

    //db calls are async 
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
       // eslint-disable-next-line no-unused-vars
       const userDocRef = await createUserDocumentFromAuth(user)
    }

    
    return (
        <div>
            <h1>Sign In Page</h1>
           <button onClick={logGoogleUser}>Sign In With Google</button> 
            {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>  */}
            
            <SignUpForm/>
        </div>
    )
}

export default SignIn