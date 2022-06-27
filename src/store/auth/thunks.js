import { loginPassAndEmail, registerUser, signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = ( ) => {
    return async( dispatch ) => {
        dispatch( chekingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );
        
        const result = await signInWithGoogle();

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )   

    }
}

export const startCreatingUser = ({email, password, displayName}) => {
    return async(dispatch) => {

        dispatch( checkingAuthentication() );

        const { ok, uid, photoURL, errorMessage } = await registerUser({email, password, displayName});

        if( !ok ) return dispatch( logout({ errorMessage }) );

        dispatch( login( { uid, displayName, email, photoURL } ) );   

    }
}

export const startLoginWithPassAndEmail = ({ email, password }) => {

    return async(dispatch) => {

        // Verify if user is authenticated
        dispatch( chekingCredentials() );

        // Get authentication info from API
        const { ok, uid, photoURL, errorMessage, displayName }  = await loginPassAndEmail({ email, password});
        
        // Handle error
        if( !ok ) return dispatch( logout({ errorMessage }) );

        //Dispatch the login action
        dispatch( login( { uid, displayName, email, photoURL } ) );  

    }

}