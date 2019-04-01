let burgerMenu = document.querySelector(".header-top_burger");
let adaptiveMenu = document.querySelector(".header-adaptive-menu");
let topMenu = document.querySelector(".header-top_menu");
let social = document.querySelector(".header-top_social");

burgerMenu.onclick = () => {
    if(getComputedStyle(adaptiveMenu).height === "0px"){
        if(topMenu.parentElement.className !== "header-adaptive-menu") adaptiveMenu.appendChild(topMenu);
        if(social.parentElement.className !== "header-adaptive-menu") adaptiveMenu.appendChild(social);

        adaptiveMenu.style.height = "250px";

        topMenu.style.display = "block";
        social.style.display = "block";

        setTimeout(() => {
            topMenu.style.left = "0";
            social.style.left = "0";
        }, 800);
    }else{
        topMenu.style.left = "-100px";
        social.style.left = "120px";

        setTimeout(() => {
            topMenu.style.display = "none";
            social.style.display = "none";
            adaptiveMenu.style.height = "0px";
        },800)
    }

}
