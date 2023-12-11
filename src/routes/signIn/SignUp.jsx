import { useState } from "react";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import './SignUp.scss';
import FormInput from "../../components/form-input/FormInput";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try{
            // console.log('entering try');
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            // console.log('test3', user);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            console.log('error in handling submit for singup: ', err);
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    return(
        <div className="signup-container">
            <div className="form-border-container">
                <h2>Don't have an account? </h2>
                <span> Sign up with your email and password </span>
                <form onSubmit={handleSubmit} className="sign-up-form-input">

                    <FormInput 
                    label="Display Name" 
                    required 
                    type="text" 
                    name="displayName" 
                    onChange={handleChange} 
                    value={displayName}/>

                    <FormInput 
                    label="Email" 
                    required 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    value={email}/>

                    <FormInput 
                    label="Password"
                    required 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    value={password}/>

                    <FormInput 
                    label="Confirm Password"
                    required 
                    type="password" 
                    name="confirmPassword" 
                    onChange={handleChange} 
                    value={confirmPassword}/>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;