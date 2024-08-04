import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// 注意新版的引入要長這樣!!!

const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyA9zTfbT9AjsFy64M2MI8gJp_bCGaM0efE",
     authDomain: "instagram-clone-291f6.firebaseapp.com",
     projectId: "instagram-clone-291f6",
     storageBucket: "instagram-clone-291f6.appspot.com",
     messagingSenderId: "264068300577",
     appId: "1:264068300577:web:808540df1edb9ee3c14860",
     measurementId: "G-F8NHF7B39K"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };


