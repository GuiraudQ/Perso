let nav = document.querySelector('nav');

let burger = document.querySelector('nav .menu .burger');

let link = document.querySelector('nav .menu .menu-link');
let login = document.querySelector('nav .menu .menu-login');

let opened = false;

burger.addEventListener("click", openMenu);

function openMenu (e) {
    if (!opened){
        opened = true;
        login.style.display = "flex";
        link.style.display = "flex";
        link.style.transform = "translateX(-40vw)";
        login.style.transform = "translateX(-40vw)";
        nav.style.height = "100%";
    } else {
        opened = false;
        link.style.display = "none";
        login.style.display = "none";
        link.style.transform = "translateX(0)";
        login.style.transform = "translateX(0)";
        nav.style.height = "60px";
    }
}