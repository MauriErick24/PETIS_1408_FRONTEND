// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { defaultLocale } from "yup";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-hF_QI1UOlchzxzwU4kH5w1ISLwx5jQ",
  authDomain: "backend-tis.firebaseapp.com",
  projectId: "backend-tis",
  storageBucket: "backend-tis.appspot.com",
  messagingSenderId: "818748699132",
  appId: "1:818748699132:web:2cdc56d6ffb2de24648279",
  measurementId: "G-Q230W97TB0"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(appFirebase);

export default appFirebase