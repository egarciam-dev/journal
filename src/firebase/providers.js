import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {

        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );

        const {displayName, photoURL, email, uid} = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export const registerUser = async({email, password, displayName}) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;

        // Actualizar el usuario
        await updateProfile( FirebaseAuth.currentUser, {
            displayName: displayName,
        });

        return {
            ok: true,
            uid: uid,
            photoURL: photoURL,
            email: email,
            displayName: displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message}
    }

}

export const loginPassAndEmail = async( {email, password} ) => {

    try {

        // Get auth info from Firebase API
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const {uid, photoURL, displayName} = resp.user;

        // Return user info
        return {
            ok: true,
            uid: uid,
            photoURL: photoURL,
            email: email,
            displayName: displayName
        }
        
    } catch (error) {
        return { ok: false, errorMessage: error.message}
    }
}