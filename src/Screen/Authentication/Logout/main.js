import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "../../../../global-main.js"

const auth = getAuth(app);
signOut(auth).then(() => {
    localStorage.removeItem("activeEmail")
    window.location.href = "../../Home/";
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

