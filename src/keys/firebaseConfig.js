import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXVzB5Y5o3zLDwQ7_XCh9jeSk9kX5BwFo",
  authDomain: "miaguacate-f2126.firebaseapp.com",
  projectId: "miaguacate-f2126",
  storageBucket: "miaguacate-f2126.appspot.com",
  messagingSenderId: "678608074312",
  appId: "1:678608074312:web:d9f85260caa470bee3ca7d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { app, google, db, facebook };
