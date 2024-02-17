import { set, ref, get,child, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { refDb, dbrt } from "../../../../main.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "../../global-main.js"
const addfav = document.querySelector(".addfav")
const addcart = document.querySelector(".addcart")
const activeEmail = localStorage.getItem("activeEmail")
const listNewwork2 = document.querySelector(".favcontent");
const auth = getAuth(app);
const currentuser = auth.currentUser
// viết get list từ firebase đi 

const getListProduct = async () => {
   const snapshot  = await get(child(refDb, `Favorites/`));
   if (snapshot.exists()) {
       const data = snapshot.val();
        const value = Object.values(data)
        value.map((item, index) => {

            const containerCardProduct = document.createElement("div")
            const nameProduct = document.createElement('h5');
            const descriptionProduct = document.createElement('p');
            const containerBtn = document.createElement("div")
            const btnFavorite = document.createElement("button");
            const btnAddToCard = document.createElement("button")

            nameProduct.innerText = item.name
            descriptionProduct.innerText = item.description
            

            btnFavorite.innerText = "Delete"
            btnAddToCard.innerText = 'Add To Cart'

            containerCardProduct.classList.add("containerCardProduct")
            containerBtn.classList.add("containerBtn");

            containerBtn.appendChild(btnFavorite)
            // containerBtn.appendChild(btnAddToCard)

            containerCardProduct.appendChild(nameProduct)
            containerCardProduct.appendChild(descriptionProduct)
            containerCardProduct.appendChild(containerBtn)
            listNewwork2.appendChild(containerCardProduct)

            //function Add favorite: 

            btnFavorite.addEventListener("click", () => {
                // add vào firebase 1 cái favorite như cái books
                remove(ref(dbrt, `Favorites/${item.id}`))
                alert("Successfully deleted")
                location.reload()
            })

            
        })
  } else {
    console.log("No data available");
  }
}
getListProduct()