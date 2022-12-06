import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqmO_KxSjjolCkLnk3SzpJ8NP8miWQGGo",
  authDomain: "sushi-app-297cb.firebaseapp.com",
  projectId: "sushi-app-297cb",
  storageBucket: "sushi-app-297cb.appspot.com",
  messagingSenderId: "918553881576",
  appId: "1:918553881576:web:d11147d8416ae97b01925d",
  measurementId: "G-K3BTB47BKP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
