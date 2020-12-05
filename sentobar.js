const offset=100;
const scrollUp=document.querySelector(".chevron");
const getTop=() => window.pageYOffset || document.documentElement.scrollTop;

//chevron_visibility
window.addEventListener("scroll",()=> {
  if( getTop() > offset) {
      scrollUp.classList.add("chevron--active")
}
  else{ scrollUp.classList.remove("chevron--active")}

});

//click
scrollUp.addEventListener("click",() =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});