import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyDfq2zfgg2N1w9Q0bIjofOydPUtvnhfu-I",
  authDomain: "blog-project-b6428.firebaseapp.com",
  projectId: "blog-project-b6428",
  storageBucket: "blog-project-b6428.appspot.com",
  messagingSenderId: "686669283152",
  appId: "1:686669283152:web:2607565eb257bec803b655"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();