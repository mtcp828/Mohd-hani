const button = document.getElementById("button_list");
const sidebar = document.getElementById("sidebar");

button.addEventListener("click",()=> {
    sidebar.classList.toggle("active");
});
sidebar.addEventListener("mouseleave",()=>{
    sidebar.classList.remove("active");
});

const header_title = document.getElementById("title");
header_title.addEventListener("click",()=> {
    window.location.href ="../index.html"
})