import { set, ref, get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { refDb, dbrt } from "../../../main.js";

const addfav = document.querySelector(".addfav")
const addcart = document.querySelector(".addcart")

const listNewwork2 = document.querySelector(".list-newbooks-1");

// viết get list từ firebase đi 

const getListProduct = async () => {
   const snapshot  = await get(child(refDb, "Books"));
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
            

            btnFavorite.innerText = "Add To Favorite"
            btnAddToCard.innerText = 'Add To Cart'

            containerCardProduct.classList.add("containerCardProduct")
            containerBtn.classList.add("containerBtn");

            containerBtn.appendChild(btnFavorite)
            containerBtn.appendChild(btnAddToCard)

            containerCardProduct.appendChild(nameProduct)
            containerCardProduct.appendChild(descriptionProduct)
            containerCardProduct.appendChild(containerBtn)
            listNewwork2.appendChild(containerCardProduct)

            //function Add favorite: 

            btnFavorite.addEventListener("click", () => {
                // add vào firebase 1 cái favorite như cái books
                set(ref(dbrt, `Favorites/${item.id}`), item)
                alert("Successfully added to favorites")
                console.log(item)
            })

            // function add To Card:  
            btnAddToCard.addEventListener("click", () => {
                // add vào firebase 1 cái card như cái Books
                set(ref(dbrt, `Cart/${item.id}`), item)
                alert("Successfully added to cart")
                console.log(item)
            })
        })
  } else {
    console.log("No data available");
  }
}
getListProduct()
//  hiệu ứng trái tim 
const iconheart4 = document.querySelector('#icon-heart4');
const iconheart5 = document.querySelector('#icon-heart5');
iconheart4.addEventListener('click', () => {
    iconheart4.style.color = '#DC143C';
    iconheart4.style.transition = '.5s ease';
});
iconheart5.addEventListener('click', () => {
    iconheart5.style.color = '#DC143C';
    iconheart5.style.transition = '.5s ease';
});