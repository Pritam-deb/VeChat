import firebase from 'firebase/app';
import 'firebase/auth';



export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBY1q5t2q5F4hvGDP1SKZE6shHKCQ-w_Z8",
    authDomain: "vechat-b88c4.firebaseapp.com",
    projectId: "vechat-b88c4",
    storageBucket: "vechat-b88c4.appspot.com",
    messagingSenderId: "1023312058507",
    appId: "1:1023312058507:web:0146adea31c04130f2dc8e"
}).auth();
