import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";
import './SignIn.scss';
import FormInput from "../../components/form-input/FormInput";

const defaultSignInFields = {
    email: '',
    password: '',
}

const Signin = () => {
    const [signIn, setSignIn] = useState(defaultSignInFields);
    const {email, password} = signIn;

    const onSignInChange = (event) => {
        const {name, value} = event.target;
        
        setSignIn({...signIn, [name]: value});

    }

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div className="signin-container">
        <div className="signin-form-border-container">
            <h1> Sign in here!</h1>
            <form 
            // onSubmit={handleSubmit} 
            className="sign-in-form-input">

                <FormInput 
                label="Email" 
                required 
                type="text" 
                name="email" 
                // onChange={handleChange} 
                value={email}/>

                <FormInput 
                label="Password"
                required 
                type="password" 
                name="password" 
                // onChange={handleChange} 
                value={password}/>

                <button type="submit">Sign In</button>
                <button onClick={logGoogleUser}>Log in with Google</button>
            </form>
        </div>
    </div>
    );
}

export default Signin;