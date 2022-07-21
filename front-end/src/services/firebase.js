import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyBz9W6qRSIYdUEzIZmpCe7B-ndYJR3XLkY",
  authDomain: "secondmindprojeto.firebaseapp.com",
  projectId: "secondmindprojeto",
  storageBucket: "secondmindprojeto.appspot.com",
  messagingSenderId: "383525452737",
  appId: "1:383525452737:web:e9eef8b8b2dc4cccfbcd40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
