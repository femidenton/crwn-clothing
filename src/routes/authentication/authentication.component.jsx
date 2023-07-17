// import { useEffect } from "react"
// import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import { AuthenticationContainer } from './authentication.styles';

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
        <AuthenticationContainer>
            
            {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>  */}
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    )
}

export default Authentication