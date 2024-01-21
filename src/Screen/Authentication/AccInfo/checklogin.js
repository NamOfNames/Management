let activeAccount = localStorage.getItem("activeEmail")
let loginbutton = document.getElementById("loginbutton")
let registerbutton = document.getElementById("registerbutton")
if (activeAccount == null || activeAccount == "") {
    
} else {
    loginbutton.href = "../index.html"
    loginbutton.innerHTML = "Chào bạn, " + activeAccount
    registerbutton.href = "../Logout/index.html"
    registerbutton.innerHTML = "Đăng xuất"
}