// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBtEWG7uTSx6I8BDwL0HHVuETvueSvxx9E",
    authDomain: "nt118-b3471.firebaseapp.com",
    projectId: "nt118-b3471",
    storageBucket: "nt118-b3471.appspot.com",
    messagingSenderId: "228826791331",
    appId: "1:228826791331:web:0156d8c3d0ec8421b1ae16"
  };

  
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

