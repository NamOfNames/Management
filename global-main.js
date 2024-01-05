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

const dbrt = getDatabase(app);
const refDb = ref(dbrt)
const form = document.querySelector(".formLogin")
const btnGetUserid = document.querySelector(".get_user_by_id")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  writeUserData(e.target)
})

const writeUserData = (form) => {
  const user = {
    id: form.id.value,
    name: form.fullName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    age: form.age.value,
  }
  try {
  set(ref(dbrt, `user/${user.id}`), user)
  alert("Success")
  form.id.value = ""
  form.fullName.value = ""
  form.email.value = ""
  form.phoneNumber.value = ""
  form.age.value = ""
} catch (error) {
  alert("error")
}
}

const readUserData = async () => {
  try {
    const snapshot = await get(refDb, "user")
    if (snapshot.exists()) {
      const { user } = snapshot.val()
      console.log(user)
    } else {
      console.log("No data available")
    }
  } catch (error) {
    console.log(error)
  }
}

readUserData()

export { app }