
// FOR EACH POLIFYL
(function() {
           if (typeof NodeList.prototype.forEach === "function")
               return false;
           else
               NodeList.prototype.forEach = Array.prototype.forEach;
       })();


var burger = document.getElementById('burger');
var navItems = document.querySelectorAll('.hided-navigation__a');

burger.addEventListener('click', showMenu);
navItems.forEach( function(item) {
  item.addEventListener('click', showMenu);
})



function showMenu() {
  document.getElementById('hided-menu').classList.toggle('hide');
}
