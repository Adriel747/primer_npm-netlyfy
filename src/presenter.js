

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

document.addEventListener("DOMContentLoaded", function() {
  var boton = document.getElementById("mostrar");

boton.addEventListener("click", function() {
  var respuesta = confirm("¿listo para empezar con JavaScript?");
  if (respuesta) {
    alert("¡Genial! ¡Vamos a comenzar!");
  } else {
    alert("¡No hay problema! Si cambias de opinión, aquí estaremos.");
  }
});
});