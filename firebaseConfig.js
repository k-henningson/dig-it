// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCTCtWdV9UQpUQcsVlzECWBYA2I_TLRRmc',
    authDomain: 'dig-it-578c3.firebaseapp.com',
    projectId: 'dig-it-578c3',
    storageBucket: 'dig-it-578c3.appspot.com',
    messagingSenderId: '342907405412',
    appId: '1:342907405412:web:7942b6f02dbd9693ca4b71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
