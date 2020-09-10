import React from 'react';
import './button.scss'


 const Button = ({children, inverted, isGoogleSignIn, ...otherProps}) => (
    <div >
    <button className={`${inverted? 'inverted':''}${isGoogleSignIn? 'google-sign-in':''} custom-button`} {...otherProps}>{children}</button>
   </div> 
    )


export default Button