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

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form");

    formulario.addEventListener("submit", function (event) {
        
        event.preventDefault();

        const nombreSender = document.getElementById("name").value;

        alert("Felicidades " + nombreSender + " ,se envió tu mensaje!");

        formulario.reset();
    });
});

function copyText () {
  var alias = document.getElementById("alias-mp");
  var textarea = document.createElement("textarea");

  textarea.value = alias.textContent;
  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 99999);

  try {
    document.execCommand("copy");
    alert("Texto copiado: " + alias.textContent);
  } catch (err) {
    console.error("Error al intentar copiar el texto: ", err);
  } finally {
    // Eliminar el área de texto temporal
    document.body.removeChild(textarea);
  };
};

document.getElementById("icono-copiar").onclick = copyText;
