import { set, ref, get,child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { refDb, dbrt } from "../../../main.js";
import { app } from "../../../global-main.js"

const addfav = document.querySelector(".addfav")
const addcart = document.querySelector(".addcart")
const activeEmail = localStorage.getItem("activeEmail")
const listNewwork2 = document.querySelector(".list-newbooks-1");
const auth = getAuth();
const currentuser = auth.currentUser
// viết get list từ firebase đi 
function handleAddToFav(item) {
    
    // add vào firebase 1 cái favorite như cái books
    set(ref(dbrt, `Favorites/${currentuser.uid}/${item.id}`), item)
    alert("Successfully added to favorites")
    console.log(item)
    

    console.log(item)
}

// function handleAddToCart(item) {
    
//     // add vào firebase 1 cái favorite như cái books
//     set(ref(dbrt, `Cart/${item.id}`), item)
//     alert("Successfully added to cart")
//     console.log(item)

// }

const getListProduct = async () => {
   const snapshot  = await get(child(refDb, "Books"));
   if (snapshot.exists()) {
       const data = snapshot.val();
        const value = Object.values(data)
        value.map((item, index) => {
            // listNewwork2.innerHTML += "<div class=\"prd1\"><img src=\"../../../assets/imgs/imgblog.jpg\" alt=\"\" class=\"img-prd\"><i class=\"fa-solid fa-heart icon-heart\" id=\"icon-heart4\"></i><h5>" + item.name + "</h5><div class=\"price\">$13.99 – $22.00</div><div class=\"star\"><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i></div>"
            const containerCardProduct = document.createElement("div")
            
            const nameProduct = document.createElement('h5');
            const descriptionProduct = document.createElement('p');
            const containerBtn = document.createElement("div")
            const btnFavorite = document.createElement("button");
            const btnAddToCard = document.createElement("button")

            nameProduct.innerText = item.name
            
            

            btnFavorite.innerText = "Add To Favorite"
            btnAddToCard.innerText = 'Add To Cart'

            containerCardProduct.classList.add("containerCardProduct")
            containerBtn.classList.add("containerBtn");

            containerBtn.appendChild(btnFavorite)
            containerBtn.appendChild(btnAddToCard)

            // // listNewwork2.innerHTML += "<div class=\"prd1\"><img src=\"../../../assets/imgs/imgblog.jpg\" alt=\"\" class=\"img-prd\"><i class=\"fa-solid fa-heart icon-heart\" id=\"icon-heart4\"></i><h5>"

            containerCardProduct.appendChild(nameProduct)
            
            containerCardProduct.appendChild(descriptionProduct)
            containerCardProduct.appendChild(containerBtn)
            listNewwork2.appendChild(containerCardProduct)

            // //function Add favorite: 

            btnFavorite.addEventListener("click", () => handleAddToFav(item) )


            // function add To Card:  
            btnAddToCard.addEventListener("click", () => {
                // add vào firebase 1 cái card như cái Books
                set(ref(dbrt, `Cart/${currentuser.uid}/${item.id}`), item)
                alert("Successfully added to cart")
                console.log(item)
            })
            // listNewwork2.innerHTML += "</h5><div class=\"price\">$13.99 – $22.00</div><div class=\"star\"><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i><i class=\"fa-solid fa-star\"></i></div>"
            // listNewwork2.innerHTML += "</div>"

        //     listNewwork2.innerHTML += `
        //     <div class="prd1 prd2">
        //   <img src="../../../assets/imgs/imgblog.jpg" alt="" class="img-prd">
        //   <i class="fa-solid fa-heart icon-heart" id="icon-heart5"></i>
        //   <h5>${item.name}</h5>
        //   <div class="price">
        //     $11.99 – $18.00
        //   </div>
        //   <div class="star">
        //     <i class="fa-solid fa-star"></i>
        //     <i class="fa-solid fa-star"></i>
        //     <i class="fa-solid fa-star"></i>
        //     <i class="fa-solid fa-star"></i>
        //     <i class="fa-regular fa-star"></i>
        //   </div>
          
        //     <button onclick="handleAddToFav(${item})">Add To Favorite</button>
        //     <button onclick="handleAddToCart(${item})">Add To Cart</button>
          
        // </div>
        //     `
//         listNewwork2.innerHTML += `
//         <div class="card" style="width: 18rem;">
//   <img src="../../../assets/imgs/imgblog.jpg" class="card-img-top img-prd" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${item.name}</h5>
//     <button onclick="handleAddToFav(${item.id})" class="btn btn-primary">Add To Favorite</button>
//     <a onclick="handleAddToCart(${item})" class="btn btn-primary">Add To Cart</a>
//   </div>
// </div>`
        // console.log(item)
        // }
            // listNewwork2.innerHTML = `
            // <button onclick="handleAddToCart(${item})">Click</button>`
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