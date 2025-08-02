// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAcPlFVXhNLWMtiQe0V5GrsdYfYMj7Y-DY",
authDomain: "pibookbookmarkduotone.firebaseapp.com",
projectId: "pibookbookmarkduotone",
storageBucket: "pibookbookmarkduotone.firebasestorage.app",
messagingSenderId: "17018191450",
appId: "1:17018191450:web:5a1293f9da48ae3ab6e263",
measurementId: "G-C8K6J4TBPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);