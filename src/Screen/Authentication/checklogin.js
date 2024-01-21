let activeAccount = localStorage.getItem("activeEmail")
let loginbutton = document.getElementById("loginbutton")
let registerbutton = document.getElementById("registerbutton")
if (activeAccount == null || activeAccount == "") {
    
} else {
    loginbutton.href = "../Authentication/index.html"
    loginbutton.innerHTML = "Chào bạn, " + activeAccount
    registerbutton.href = "../Authentication/Logout/index.html"
    registerbutton.innerHTML = "Đăng xuất"
}