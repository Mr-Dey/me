const nav =document.querySelector(".nav");
const navButton=document.querySelector("#navButton");
const navList=document.querySelector(".navList");
const navListItems=document.querySelector(".navListItems");

let showNavbar=false;

navButton.addEventListener('click',()=>{

    if(showNavbar==false){
        showNavbar=true;
        navList.classList.add("navList_Clicked");
        navButton.classList.add("navbutton_clicked");
    }
    
    else{
        showNavbar=false;
        navList.classList.remove("navList_Clicked");
        navButton.classList.remove("navbutton_clicked");
    }
})