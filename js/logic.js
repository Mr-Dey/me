//navbar Properities
const nav =document.querySelector(".nav");
const navButton=document.querySelector("#navButton");
const navList=document.querySelector(".navList");
const navListItems=document.querySelector(".navListItems");

//Container Properties
const downloadButton=document.querySelector(".downloadBtn");


//navbar Logic
let showNavbar=false;
navButton.addEventListener('mouseup',()=>{

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

//downloadButton Logic
downloadButton.addEventListener("click",()=>{
    downloadButton.href='./pdf/Resume24.pdf';
})