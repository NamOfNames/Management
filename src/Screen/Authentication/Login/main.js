import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "../../../../main.js"


const eventFormLogin = document.querySelector(".formLogin")
const inputEmail = document.querySelector(".inputEmail")
const inputPassword = document.querySelector(".inputPassword")
const auth = getAuth(app)

console.log("auth", auth);


eventFormLogin.addEventListener("submit", (event) => {
    event.preventDefault();
  
    //   createUserWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
    //     .then((userCredential) => {
    //       const user = userCredential.user;
  
    //       alert("message success");
    //       console.log(user);
  
    //       localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
    //     })
    //     .catch((error) => {
    //       //   console.log(error.code, error.message);
    //       if (error.code == "auth/email-already-in-use") {
    //         alert("user đã tồn tại");
    //       }
    //       //   viết component toast
    //     });
  
    signInWithEmailAndPassword(auth, inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        //   console.log(userCredential.accessToken);
        const user = userCredential.user;
  
        localStorage.setItem("accessToken", JSON.stringify(user.accessToken));
        localStorage.setItem("activeEmail", inputEmail.value);
        window.location.href = "../../Home/index.html";
      })
      .catch((error) => console.log(error));
  });


