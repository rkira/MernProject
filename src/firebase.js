// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNg61LV84T4PUG4ruskc8fnrNT_4J-tw",
  authDomain: "mernprobkb.firebaseapp.com",
  projectId: "mernprobkb",
  storageBucket: "mernprobkb.appspot.com",
  messagingSenderId: "558817611593",
  appId: "1:558817611593:web:0709be810e82a7ca399498",
  measurementId: "G-J218J6ECXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth and Firestore instances
export const firestore = getFirestore(app);
export const auth = getAuth(app);

export default app;
