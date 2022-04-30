import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxIybYChHhvp_JORB0vpMZ6lTOJJH4ekM",
    authDomain: "todoey-bfe15.firebaseapp.com",
    databaseURL: "https://todoey-bfe15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoey-bfe15",
    storageBucket: "todoey-bfe15.appspot.com",
    messagingSenderId: "453159065871",
    appId: "1:453159065871:web:af7e5b4eaaa0616346467a"
};
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);