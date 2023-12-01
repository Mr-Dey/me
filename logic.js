const nav =document.querySelector(".nav");
const navButton=document.querySelector("#navButton");
const navList=document.querySelector(".navList");
const navListItems=document.querySelector(".navListItems");

let showNavbar=false;

navList.style.transition="all 1s ease, height 0.3s ease, opacity 0.3s ease";
navList.style.opacity="0";
navList.style.height="0px";
navList.style.width="10%";
navList.style.margin="0px auto";
navList.style.fontSize="0rem";



navButton.addEventListener('click',()=>{
    if(showNavbar==true){
        showNavbar=false;

        navList.style.opacity="0";
        navList.style.height="0px";
        navList.style.width="20%";
        navList.style.margin="0px auto";
        navList.style.fontSize="0rem";
    }
    else{
        showNavbar=true;

        navList.style.opacity="1";
        navList.style.height="240px";
        navList.style.width="80%";
        navList.style.margin="30px auto";
        navList.style.fontSize="1.5rem";
    }
    console.log(showNavbar);
})