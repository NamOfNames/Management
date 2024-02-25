import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "../../../../global-main.js"
import { getDatabase, set, ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const eventFormLogin = document.querySelector(".formLogin")
const inputEmail = document.querySelector(".inputEmail")
const inputPassword = document.querySelector(".inputPassword")
const auth = getAuth(app)
const dbrt = getDatabase(app);

console.log("auth", auth);
const form = document.querySelector(".formLogin")
const btnGetUserid = document.querySelector(".get_user_by_id")
const writeUserData = (form) => {
  const user = {
    id: Math.floor(Math.random() * 100000),
    name: form.fullName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    age: form.age.value,
  }
  try {
  set(ref(dbrt, `user/${user.id}`), user)
  

  form.fullName.value = ""
  form.email.value = ""
  form.phoneNumber.value = ""
  form.age.value = ""
} catch (error) {

}
}
form.addEventListener("submit", (e) => {
  e.preventDefault()
  writeUserData(e.target)
  createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          
          alert("message success");
          console.log(user);
  
          localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
          window.location.replace("../Login/index.html");
          
        })
        .catch((error) => {
          //   console.log(error.code, error.message);
          if (error.code == "auth/email-already-in-use") {
            alert("user đã tồn tại");
          }
          //   viết component toast
        })
})


