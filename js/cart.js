let text = document.getElementsByClassName("banner-title");
let background = document.getElementById("header");

window.addEventListener('scroll',function(){
  var value = window.scrollY;
  
  background.stylec.top = value*0.15+'px';
  text.stylec.top = value*0.15+'px';
})