import { navbar } from "./Components/Navbar_ayaz.js";
document.querySelector("#navbar-container").innerHTML= navbar()


import { footer } from "./Components/footer_ayaz.js";
document.querySelector("#footerContainer").innerHTML= footer()













document.querySelector("#optionIcon").addEventListener("click",opensideBar)
function opensideBar(){

   var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="flex"

}





document.querySelector("#optionforcloseside").addEventListener("click",closesideBar)
function closesideBar(){

    var sidebar= document.querySelector("#sidebar_container")
   sidebar.style.display="none"
   
}