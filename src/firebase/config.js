import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAPLXay-CHTaJxxRvvALC_Y6An_Xjgr2sg',
    authDomain: 'money-of-mine.firebaseapp.com',
    projectId: 'money-of-mine',
    storageBucket: 'money-of-mine.appspot.com',
    messagingSenderId: '977717770928',
    appId: '1:977717770928:web:1998c5748b8c8afeb95975',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
