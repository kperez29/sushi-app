import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeQhX9YYF_iNZWdQIbE-PEiWDC-8nng0g",
  authDomain: "sushi-recipe-app.firebaseapp.com",
  projectId: "sushi-recipe-app",
  storageBucket: "sushi-recipe-app.appspot.com",
  messagingSenderId: "1042521018341",
  appId: "1:1042521018341:web:fc894cdba523480c9e290c",
  measurementId: "G-RXGFFYJZHJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
