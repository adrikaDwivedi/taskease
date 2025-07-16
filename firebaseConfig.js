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

export { db, auth }; // ✅ cleaner



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBWUVZ8bIGjNdrIAmmbkrDpPxIISWHNxPc",
//   authDomain: "whatbytes-4bcba.firebaseapp.com",
//   projectId: "whatbytes-4bcba",
//   storageBucket: "whatbytes-4bcba.firebasestorage.app",
//   messagingSenderId: "795619802442",
//   appId: "1:795619802442:web:85d07aecae8357a66095b3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);





// // 795619802442-36abts06o2qbe6nsibhn7o09rgiit86q.apps.googleusercontent.com
// 1803630193646050 facebook cliend id
// a86300bab6cdf8a83fb3fc1be74a0e63 facebook secret password