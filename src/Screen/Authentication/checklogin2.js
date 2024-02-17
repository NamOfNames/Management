let activeAccount = localStorage.getItem("activeEmail")
if (activeAccount.includes("@") || activeAccount.includes(".")) {
    window.location.href = "../../Home/index.html";
}