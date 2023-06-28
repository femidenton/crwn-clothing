import { useState } from "react"
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-in-form.styles.scss';
import Button from "../button/button.component";


const defaultFormFields = {

    email : '',
    password : '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields
    
    console.log(formFields)

     const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
       // eslint-disable-next-line no-unused-vars
       const userDocRef = await createUserDocumentFromAuth(user)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        //confirm passwords  matches
    
        try {
            // see if authenticated with email and password
             const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)

            resetFormFields()
            
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password")
                    break;
                case "auth/user-not-found":
                    alert("No user associated with this email")
                    break;
            
                default:
                    console.log('user sign in encountered error', error)
                    break;
            }
        }
    
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]:value})
    }
    return (
         <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                   <FormInput
                    label="Email"
                    required type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />      
                    
                
                <FormInput
                    label="Password"
                    required type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />     
                <div className="buttons-container">
                    <Button type='button' buttonType="google" onClick={logGoogleUser}>Sign In With Google</Button> 
                    <Button type='submit'>Sign In</Button>  
                 </div>
            </form>
            {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>  */}
        
        </div>
    )
} 

export default SignInForm