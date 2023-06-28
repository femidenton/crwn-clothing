// import { useEffect } from "react"
// import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import './authentication.styles.scss'
import SignInForm from "../../components/sign-in-form/sign-in-form.component"


const Authentication = () => { 

    // useEffect(async () => {
    //     //retrieve the response from the redirect since it doesnt log anything when clicked
    //     //auth helps keep trakc of the authentication state thru out the app
    //     const response = await getRedirectResult(auth)
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])
    




   
    
    return (
        <div className="authentication-container">
            
            {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>  */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication