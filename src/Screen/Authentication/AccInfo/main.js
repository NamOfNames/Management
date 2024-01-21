import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { refDb } from "../../../../global-main.js";



const dbRef = refDb
get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
