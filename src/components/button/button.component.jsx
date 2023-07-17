/* eslint-disable react/prop-types */
import { InvertedButton, GoogleSignInButton, BaseButton  } from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    base: 'base',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base] : BaseButton,
        [BUTTON_TYPE_CLASSES.google] : GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted] : InvertedButton,
           
     }[buttonType]    
) 

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType )
    return (
        <CustomButton
            // className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </CustomButton>

    )
}

export default Button