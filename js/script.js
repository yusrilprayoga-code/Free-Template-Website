var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarNav").style.top = "0";
    document.getElementById("navbarNav").style.transition = "200ms";
  } else {
    document.getElementById("navbarNav").style.top = "-100px";
    
  }
  prevScrollpos = currentScrollPos;
};

