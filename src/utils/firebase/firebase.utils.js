import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,  GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  getFirestore,
  doc, //get document instance
  getDoc, //access the document data
  // eslint-disable-next-line no-unused-vars
  setDoc //set or change the document data
} from 'firebase/firestore'


// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyB3TJL1CzTjihsU22YJQ6J28NoLal3z4yA",
  authDomain: "crwn-clothing-db-2b4d4.firebaseapp.com",
  projectId: "crwn-clothing-db-2b4d4",
  storageBucket: "crwn-clothing-db-2b4d4.appspot.com",
  messagingSenderId: "676524831308",
  appId: "1:676524831308:web:0dc6422609782065dcbae9"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

//initialize provider
// a class from firebase authentication which is connected to Google auth (this is the firebase implemetation, google has others)
// reason why its a class using the new keyword is cause one might want to set up multiple provider instances and used them for different things
const googleProvider = new GoogleAuthProvider()

//set custom params
// set specific behaviour for the google auth provider
 .setCustomParameters({
    prompt: "select_account" //when a client interacts with the provider (ie tries to login) a propmt to select an account should appear
})

// rules and dnamics of authentication are always the same through out,no need for multiple instances
//dont need more than one authentication. might need multiple providers
//getAuth() keeps track of the authentication state of the entire application 
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


//set db instance
export const db = getFirestore()

//function to  store auth data into firestore db
export const createUserDocumentFromAuth = async (userAuth, additionalInfo= {}) => {
  if(!userAuth) return
    //see if there is an existing document reference. creates reference (ie users/ioepdHDHea) but not stored in db
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
     
    //check for document data
  const userSnapshot = await getDoc(userDocRef)
 
  //if user doesnt exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      //set doc in db
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log('error creating user ' ,error.message)
    }
  }
  //if user exists
  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}



