const navbarEl=document.querySelector(".navbar");
const BottomContEl=document.querySelector(".bottom-container")

console.log(navbarEl.offsetHeight);
console.log(BottomContEl.offsetTop);

window.addEventListener( "scroll", ()=>{
 if(window.scrollY>245-navbarEl.offsetHeight-40){
    navbarEl.classList.add("active");
 }else{
    navbarEl.classList.remove("active");
 }
});
