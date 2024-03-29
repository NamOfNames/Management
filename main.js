import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, set, ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdO7FMR3KJrGhcBSwY7o9cCWqPcSR4cVo",
    authDomain: "final-project-uvk-jsi01-hb.firebaseapp.com",
    databaseURL: "https://final-project-uvk-jsi01-hb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "final-project-uvk-jsi01-hb",
    storageBucket: "final-project-uvk-jsi01-hb.appspot.com",
    messagingSenderId: "723734130833",
    appId: "1:723734130833:web:e0728ad318d69bdc67cf30",
    measurementId: "G-RY2KY2Z9L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dbrt = getDatabase(app);
const refDb = ref(dbrt)
const form = document.querySelector(".formLogin")
const btnGetUserid = document.querySelector(".get_user_by_id")



export { app, refDb }