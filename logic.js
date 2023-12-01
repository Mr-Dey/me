const navBar =document.querySelector(".nav");
const navButton=document.querySelector("#navButton");
const navList=document.querySelector(".navList");

let showNavbar=true;

navList.style.transition="all 0.5s ease";
navList.style.height="240px";
navList.style.overflowX="auto";
// navList.style.backdropFilter="blur(6px)";



navButton.addEventListener('click',()=>{
    if(showNavbar==true){
        showNavbar=false;
        navList.style.height="0px";
        // navList.style.display="none";
    }
    else{
        showNavbar=true;
        navList.style.height="240px";
        // navList.style.display="block";
    }
    console.log(showNavbar);
})