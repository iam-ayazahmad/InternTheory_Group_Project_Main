document.querySelector("button").addEventListener("click", CONTINUE);
var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
function CONTINUE(event) {
  event.preventDefault()
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var user = document.querySelector("#firstname").value;
  var mobile = document.querySelector("#mobile").value;

  var userCred = {
    emailAdd: email,
    pass: password,
    userName: user,
    mobile: mobile,
  };
  userData.push(userCred);
  localStorage.setItem("userDatabase", JSON.stringify(userData));
  
}
 document.querySelector("#submitId").addEventListener("click", function () {
   alert("Succesfully Registered")
        window.location.href = "login.html"
    })



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