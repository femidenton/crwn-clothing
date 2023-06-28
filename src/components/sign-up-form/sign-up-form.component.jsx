import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import './sign-up.styles.scss';
import Button from "../button/button.component";


const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    
    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        //confirm passwords  matches
        if (password !== confirmPassword) {
            alert("Passwords doesn't match")
            return
        }
        try {
            // see if authenticated with email and password
            const authenticateUser = await createAuthUserWithEmailAndPassword(email, password)

            //crreate a user doc 
            await createUserDocumentFromAuth(authenticateUser.user, { displayName })
            resetFormFields()
            
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use")
            } else {
                console.log('user creation encountered error', error)
                
            }
        }
    
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({...formFields, [name]:value})
    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                {/* <FormInput
                    label="Display Name"
                    inputOptions={{
                        required:true,
                        type:"text",
                        name:"displayName",
                        value:{displayName},
                        onChange:{handleChange}
                   }} 
                   ALternative way
                />      */}

                <FormInput
                    required
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                />    
                    
               
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
                    
               
                <FormInput
                    label="Confirm Password"
                    required type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />     
                
                <Button  type="submit">Sign Up</Button>
                
            </form>
        </div>
    )
} 

export default SignUpForm