import { useState } from "react"
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// import { UserContext } from "../../context/user.context";

const defaultFormFields = {

    email : '',
    password : '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    // const {setCurrentUser} = useContext(UserContext)
    
    console.log(formFields)

     const logGoogleUser = async () => {
         await signInWithGooglePopup()
        //  setCurrentUser(user)  
      
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        //confirm passwords  matches
    
        try { 
            // see if authenticated with email and password
            //  const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            await signInAuthUserWithEmailAndPassword(email, password)
            
            // setCurrentUser(user)

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
         <SignInContainer>
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
                <ButtonsContainer>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Sign In With Google</Button> 
                    <Button type='submit'>Sign In</Button>  
                 </ButtonsContainer>
            </form>
            {/* <button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>  */}
        
        </SignInContainer>
    )
} 

export default SignInForm