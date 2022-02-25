function navbar(){

    return `<div id="navbar">

    <img id="optionIcon" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="">


    <img id="internIcon" src="data:image/png;base64,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" alt="">

    <a href="" id=carticon2><img id="cardicon" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt=""></a>
    <div id="cartCount">0</div>

    <a id="signinicon" href=""><div>SIGN IN</div></a>


</div>`

}

export {navbar}