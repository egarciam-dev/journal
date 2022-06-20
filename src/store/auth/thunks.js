import { signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
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