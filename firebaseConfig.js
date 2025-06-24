// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWUVZ8bIGjNdrIAmmbkrDpPxIISWHNxPc",
  authDomain: "whatbytes-4bcba.firebaseapp.com",
  projectId: "whatbytes-4bcba",
  storageBucket: "whatbytes-4bcba.appspot.com",  
  messagingSenderId: "795619802442",
  appId: "1:795619802442:web:85d07aecae8357a66095b3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; // 


