// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg4lUwMaasZ-6liHdc8xZbTMDQX1nAFU0",
    authDomain: "bike-park-8a78c.firebaseapp.com",
    projectId: "bike-park-8a78c",
    storageBucket: "bike-park-8a78c.appspot.com",
    messagingSenderId: "771241794631",
    appId: "1:771241794631:web:ed87204f385b06565de562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;