// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 10  || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "5px 0px";
    document.getElementById("logo").style.fontSize = "0px";
  } else {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("logo").style.fontSize = "10px";
  }
}