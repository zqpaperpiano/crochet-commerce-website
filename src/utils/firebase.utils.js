// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6zQLg6-0-tcSe41imJKJTfHyjTaMJALM",
  authDomain: "crochet-goodies.firebaseapp.com",
  projectId: "crochet-goodies",
  storageBucket: "crochet-goodies.appspot.com",
  messagingSenderId: "324041299156",
  appId: "1:324041299156:web:56a94040c4f6f6c18f1741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore(app); //directly points to database inside of console
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    try{
        const userDocRef = doc(db, "user", userAuth.uid);
        if (!userAuth) return;
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
        
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
          }
          return userDocRef;
    }catch(err){
        console.log('An error has occured when trying to fetch docRef', err);
    }

  };

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;

    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('This email is already in use!');
        }else if(error.code === 'auth/weak-password'){
            alert('Password needs to have at least 6 characters')
        }else if(error.code === 'auth/popup-closed-by-user'){
            alert('Popup was closed. Please try again.');
        }else{
            console.log('An error occured');
        }

        // console.log(error.code);
    }
}