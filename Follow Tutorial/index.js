
let menubtn = document.querySelector("#menubtn")
let menu = document.querySelector(".nav-links")
let closebtn = document.querySelector("#closebtn")

menubtn.onclick =  function(){
    menu.style.top = "0"
}
closebtn.addEventListener("click", function () {
    menu.style.top = "-500px"
})