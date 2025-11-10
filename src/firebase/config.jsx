// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzBCrVuSXRG5ra7gs_5TZbkJ5WtifCNvg",
  authDomain: "netflix-11fb0.firebaseapp.com",
  projectId: "netflix-11fb0",
  storageBucket: "netflix-11fb0.firebasestorage.app",
  messagingSenderId: "724808380151",
  appId: "1:724808380151:web:6d0f5d0e5613adac156df2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

// Timestamp
const timestamp = Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };