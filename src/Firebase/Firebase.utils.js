import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";






const firebaseConfig = {

    apiKey: "AIzaSyAp4E2RE81DglDvp7VPmCVQPoZDNkMvwu0",

    authDomain: "crwn-cloths-2209b.firebaseapp.com",

    projectId: "crwn-cloths-2209b",

    storageBucket: "crwn-cloths-2209b.appspot.com",

    messagingSenderId: "341742128813",

    appId: "1:341742128813:web:734294b0a66d5afcacc024",

    measurementId: "G-FJJ8YZP77N"

};
const Firebase=initializeApp(firebaseConfig);


export const auth = getAuth();

export const fireStore=getFirestore();
const provider=new GoogleAuthProvider();
export const GoogleSignin=()=>{
    signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const  user = result.user;
    console.log(user)
    // ...
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});}


export default Firebase;