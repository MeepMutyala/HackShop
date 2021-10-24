import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDM5eN3yYNO9Y9LWXxak4A6gTADMpMJTZw",
    authDomain: "hackshop-dev.firebaseapp.com",
    projectId: "hackshop-dev",
    storageBucket: "hackshop-dev.appspot.com",
    messagingSenderId: "738927840478",
    appId: "1:738927840478:web:3e43da4c07b9c159a9864f",
    measurementId: "G-KXWRQV07L8"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();



export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
    console.log("peepoo1")

    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    // console.log(userRef.id)

    const snapshot = await userRef.get();
    
    if (!snapshot.exists) {
        const { email } = user;
        const hometown  = additionalData;
    
        try {
          await userRef.set({
            hometown,
            email,
            createdAt: new Date(),
          });
        } catch (error) {
          console.log('Error in creating user', error);
        }
    }

    console.log(userRef.id + 'from firebase.js')
    
    return userRef.id
}

export default firebaseConfig 