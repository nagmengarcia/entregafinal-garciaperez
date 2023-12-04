document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("mobile-and-tablet-menu-button");
  const menuItems = document.getElementById("menu-items");
  const textoParaCambiar = document.getElementById("menu-text");

  let textoCambiado = false;

  menu.addEventListener("click", function () {
    menuItems.classList.toggle("appear");
    /*textoParaCambiar.textContent = "cerrar";*/
    if (textoCambiado) {
      textoParaCambiar.textContent = "menú";
    } else {
      textoParaCambiar.textContent = "cerrar"
    }
    
    textoCambiado = !textoCambiado;
  }, 10);


});

