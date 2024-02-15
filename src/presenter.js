// import sumar from "./sumador";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  
  div.innerHTML = "<p> Hola " + nombre + "</p>";
});
